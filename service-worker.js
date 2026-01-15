---
layout: null
sitemap: false
---
// Use Jekyll's build time to generate a unique cache name.
var CACHE_NAME = "akhyarrh-minima-{{ site.time | date: '%s' }}";

var urlsToCache = [
  "{{ '/' | relative_url }}",
  "{{ '/assets/main.css' | relative_url }}",
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

  event.respondWith(
    caches.match(event.request).then(function(response) {
      // Cache Hit - Return the cached response
      if (response) {
        return response;
      }
      
      // Cache Miss - Fetch from network
      return fetch(event.request).catch(function() {
        // Offline Fallback: If network fails and request is for an HTML page, show 404/Offline page
        // We check headers to ensure we only return the 404 page for navigation requests, not images/css.
        if (event.request.headers.get('accept').includes('text/html')) {
            return caches.match("{{ '/404.html' | relative_url }}");
        }
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
