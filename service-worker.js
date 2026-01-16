---
layout: null
sitemap: false
---
// Use Jekyll's build time to generate a unique cache name.
var CACHE_NAME = "akhyarrh-minima-{{ site.time | date: '%s' }}";

var urlsToCache = [
  "{{ '/' | relative_url }}",
  "{{ '/blog/' | relative_url }}",
  "{{ '/profile/' | relative_url }}",
  "{{ '/assets/css/style.css' | relative_url }}",
  "{{ '/404.html' | relative_url }}"
];

// 1. INSTALL: Cache the core assets immediately
self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});

// 2. FETCH: Intercept network requests
self.addEventListener("fetch", function(event) {

  // SECURITY CHECK: Origin Validation
  // We only want to handle requests that belong to the same origin (my website).
  // This ignores requests to external domains (like Google Analytics, external CDNs, etc).
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }

  // METHOD CHECK: Only handle GET requests
  // Service Workers should generally not intercept POST/PUT/DELETE requests.
  if (event.request.method !== 'GET') {
    return;
  }
  
  
  // EXCLUDE LIST
  // We do not want to cache these. Return immediately to let the network handle them.
  var requestUrl = new URL(event.request.url);

  // Define regex for files/folders to ignore
  var excludeRegex = new RegExp(
    // Match specific folders:
    '^/\\.well-known/|' +
  
    // Match specific files:
    '/feed\\.xml$|' +
    '/sitemap\\.xml$|' +
    '/robots\\.txt$|' +
  
    // Match file extensions (Large files):
    //'\\.(pdf|zip|mp4|webm)$'
  );

  // Check 'pathname' (e.g., /feed.xml) NOT the full URL
  if (excludeRegex.test(requestUrl.pathname)) {
    return;
  }

  // STRATEGY 1: HTML Requests (Network First, Fallback to Cache)
  // We want blog posts to be fresh. Try network first.
  if (event.request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(
      fetch(event.request)
        .then(function(response) {
          // Network succeeded: Return response AND save to cache
          var responseClone = response.clone();
          caches.open(CACHE_NAME).then(function(cache) {
            cache.put(event.request, responseClone);
          });
          return response;
        })
        .catch(function() {
          // Network failed: Try cache
          return caches.match(event.request).then(function(response) {
            // If in cache, return it. If not, return 404 page.
            return response || caches.match("{{ '/404.html' | relative_url }}");
          });
        })
    );
    return;
  }

  // STRATEGY 2: Assets/Images/CSS (Cache First, Fallback to Network)
  // These rarely change, so check cache first for speed.
  event.respondWith(
    caches.match(event.request).then(function(response) {
        
      // Cache Hit - Return the cached response
      if (response) {
        return response;
      }

      // Cache Miss: Fetch from network and SAVE it
      return fetch(event.request).then(function(response) {
        // Check if we got a valid response
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }

        var responseClone = response.clone();
        caches.open(CACHE_NAME).then(function(cache) {
          cache.put(event.request, responseClone);
        });

        return response;
      });
    })
  );
});

// 3. ACTIVATE: Clean up old caches
self.addEventListener("activate", function(event) {
  var cacheAllowlist = [CACHE_NAME];

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheAllowlist.indexOf(cacheName) === -1) {
            console.log("Deleting old cache:", cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  
  // Take control of the page immediately
  return self.clients.claim();
});
