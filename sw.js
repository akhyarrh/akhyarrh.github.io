---
layout: none
---

var urlsToCache = [];

var CACHE_NAME = 'akhyarrh-v{{ site.time | date: "%Y%s" }}';

{% for post in site.posts %}
urlsToCache.push("{{ post.url }}")
{% endfor %}

{% for page in site.pages %}
urlsToCache.push("{{ page.url }}")
{% endfor %}

{% for file in site.static_files %}
urlsToCache.push("{{ file.path }}")
{% endfor %}

self.addEventListener('install', function(event) {
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
