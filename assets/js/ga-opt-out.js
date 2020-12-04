---
layout: null
---

// Set to the same value as the web property used on the site
var gaProperty = '{{ site.analytics.google.tracking_id }}';

// Disable tracking if the opt-out cookie exists.
var disableStr = 'ga-disable-' + gaProperty;
if (document.cookie.indexOf(disableStr + '=true') > -1) {
  window[disableStr] = true;
}

// Opt-out function
function gaOptout() {
  var button = document.getElementById('ga-op-out-button');
  document.cookie = disableStr + '=true; expires=Thu, 31 Dec 2999 23:59:59 UTC; path=/';
  window[disableStr] = true;
  button.classList.remove('btn--primary');
  button.classList.add('btn--success');
  button.innerHTML="Sukses !";
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('ga-op-out-button')
   .addEventListener('click', gaOptout);
});
