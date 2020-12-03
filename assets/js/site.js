---
layout: nil
---

document.documentElement.className = document.documentElement.className.replace(/\bno-js\b/g, '') + ' js ';

window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;
ga('create','{{ site.analytics.google.tracking_id }}','auto');
ga('set', 'anonymizeIp', {{ site.analytics.google.anonymize_ip | default: false }});
ga('set', 'transport', 'beacon');
ga('send','pageview');

// Set to the same value as the web property used on the site
var gaProperty = '{{ site.analytics.google.tracking_id }}';

// Disable tracking if the opt-out cookie exists.
var disableStr = 'ga-disable-' + gaProperty;
if (document.cookie.indexOf(disableStr + '=true') > -1) {
  window[disableStr] = true;
}

// Opt-out function
function gaOptout() {
  document.cookie = disableStr + '=true; expires=Thu, 31 Dec 2999 23:59:59 UTC; path=/';
  window[disableStr] = true;
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('ga-op-out-button')
   .addEventListener('click', gaOptout);
});
