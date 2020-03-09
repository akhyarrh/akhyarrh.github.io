---
layout: none
---

var urlsToCache = [];

var CACHE_NAME = 'akhyarrh-cache-v1';

// Cache posts
{% for post in site.posts %}
urlsToCache.push("{{ post.url }}")
{% endfor %}

// Cache pages
{% for page in site.pages %}
urlsToCache.push("{{ page.url }}")
{% endfor %}

// Cache assets
{% for file in site.static_files %}
urlsToCache.push("{{ file.path }}")
{% endfor %}

// Installation of service worker
self.addEventListener('install', function(event) {
	// Perform install steps
	event.waitUntil(
		caches.open(CACHE_NAME)
		.then(function(cache) {
			return cache.addAll(urlsToCache);
		})
	);
});

self.addEventListener('fetch', event => {
	event.respondWith(
		caches.match(event.request, {ignoreSearch:true}).then(response => {
			return response || fetch(event.request);
		})
	);
});
