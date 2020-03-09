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
