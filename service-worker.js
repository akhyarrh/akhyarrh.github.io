---
layout: null
sitemap: false
---

const CACHE_NAME = "akhyarrh-minima-{{ site.time | date: '%s' }}";

const urlsToCache = [
  "{{ '/' | relative_url }}",
  "{{ '/blog/' | relative_url }}",
  "{{ '/profile/' | relative_url }}",
  "{{ '/assets/css/style.css' | relative_url }}",
  "{{ '/404.html' | relative_url }}"
];

const excludePatterns = [
  '^/\\.well-known/',
  // '^/admin/',
  '/feed\\.xml$',
  '/sitemap\\.xml$',
  '/robots\\.txt$',
  // '/ads\\.txt$',
  // '/CNAME$',
  '\\.(pdf|zip|mp4|webm)$'
];
const excludeRegex = new RegExp(excludePatterns.join('|'));

// Install: pre-cache assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Pre-caching');
      return cache.addAll(urlsToCache);
    })
  );
});

// Activate: clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(Promise.all([
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames
          .filter((key) => key !== CACHE_NAME)
          .map((key) => {
            console.log('Deleting old cache:', key);
            return caches.delete(key);
          })
      )
    ),
    self.clients.claim()
  ]));
});

// Helper: fetch from network and cache successful responses
const fetchAndCache = (request, event) =>
  fetch(request).then((networkResponse) => {
    if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
      const responseClone = networkResponse.clone();
      event.waitUntil(
        caches
          .open(CACHE_NAME)
          .then((cache) => cache.put(request, responseClone))
          .catch((err) => console.error('SW cache put failed:', err))
      );
    }
    return networkResponse;
  });

// Fetch handler: network-first for HTML, cache-first for others
self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Only handle same-origin GET requests and not excluded paths
  if (!request.url.startsWith(self.location.origin) || request.method !== 'GET') {
    return;
  }

  const url = new URL(request.url);
  if (excludeRegex.test(url.pathname)) {
    return;
  }

  // Network-first for navigation/HTML requests
  if (request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(
      fetchAndCache(request, event).catch(() =>
        caches.match(request).then((cachedResponse) => cachedResponse || caches.match("{{ '/404.html' | relative_url }}"))
      )
    );
    return;
  }

  // Cache-first for other assets
  event.respondWith(caches.match(request).then((response) => response || fetchAndCache(request, event)));
});
