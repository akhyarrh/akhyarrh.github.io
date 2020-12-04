---
layout: null
---

document.documentElement.className = document.documentElement.className.replace(/\bno-js\b/g, '') + ' js ';

window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;
ga('create','{{ site.analytics.google.tracking_id }}','auto');
ga('set', 'anonymizeIp', {{ site.analytics.google.anonymize_ip | default: false }});
ga('set', 'transport', 'beacon');
ga('send','pageview');
