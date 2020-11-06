---
layout: none
sitemap: false
---

var urlsToCache = [];

var CACHE_NAME = 'akhyarrh-v{{ site.time | date: "%s" }}';

{% for post in site.posts %}
urlsToCache.push("{{ post.url }}")
{% endfor %}

{% for page in site.pages %}
{% if page.url == '/404.html' %}
{% elsif page.url == '/service-worker.js' %}
{% elsif page.url == '/robots.txt' %}
{% elsif page.url == '/assets/css/main.css.map' %}
{% elsif page.url == '/assets/js/lunr/lunr-gr.js' %}
{% elsif page.url contains 'webmanifest' %}
{% elsif page.url contains 'xml' %}
{% else %}
urlsToCache.push("{{ page.url }}")
{% endif %}
{% endfor %}

{% for file in site.static_files %}
{% if file.path == '/assets/js/_main.js' %}
{% elsif file.path == '/assets/js/lunr/lunr.js' %}
{% elsif file.path contains '/assets/js/plugins' %}
{% elsif file.path contains '/assets/js/vendor' %}
{% else %}
urlsToCache.push("{{ file.path }}")
{% endif %}
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
