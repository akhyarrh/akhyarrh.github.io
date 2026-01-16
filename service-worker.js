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
  //'^/admin/',
  '/feed\\.xml$',
  '/sitemap\\.xml$',
  '/robots\\.txt$',
  //'/ads\\.txt$',
  //'/CNAME$',
  '\\.(pdf|zip|mp4|webm)$'
];
const excludeRegex = new RegExp(excludePatterns.join('|'));

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Pre-caching");
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.filter((key) => key !== CACHE_NAME)
          .map((key) => {
            console.log("Deleting old cache:", key);
            return caches.delete(key);
          })
      );
    })
  );
  return self.clients.claim();
});

const fetchAndCache = (request, event) => {
  return fetch(request).then((networkResponse) => {
    if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
      const responseClone = networkResponse.clone();
      event.waitUntil(
        caches.open(CACHE_NAME)
          .then((cache) => cache.put(request, responseClone))
          .catch(err => console.error('SW cache put failed:', err))
      );
    }
    return networkResponse;
  });
};

self.addEventListener("fetch", (event) => {
  
  if (!event.request.url.startsWith(self.location.origin) || event.request.method !== 'GET') {
    return;
  }

  const url = new URL(event.request.url);
  if (excludeRegex.test(url.pathname)) {
    return;
  }


if (event.request.headers.get('accept')?.includes('text/html')) {
  event.respondWith(
    fetchAndCache(event.request, event).catch(() => {
      return caches.match(event.request).then((cachedResponse) => {
        return cachedResponse || caches.match("{{ '/404.html' | relative_url }}");
      });
    })
  );
  return;
}

  event.respondWith(
    caches.match(event.request).then(response => response || fetchAndCache(event.request, event))
  );
});
