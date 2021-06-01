importScripts("/assets/js/workbox-v5.1.4/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "/assets/js/workbox-v5.1.4"});

self.__precacheManifest = [{"url":"/index.html","revision":"d7b641ff3fe453eeae62e5e5b3b916f0"},{"url":"/favicon.ico","revision":"0c16b8f6d053ae066c75db50d9be48db"},{"url":"/assets/android-chrome-192x192.png","revision":"c06883b9bfe688ce86573c81cd68efcd"},{"url":"/assets/logo.png","revision":"cad6818b13a87ecc0fe77783f6c277e2"},{"url":"/assets/apple-touch-icon-precomposed.png","revision":"70d29d69601693bf25d8416ff9b1921a"},{"url":"/assets/mstile-144x144.png","revision":"4d42ab482559f00e00a3588b63a5ce48"},{"url":"/assets/apple-touch-icon.png","revision":"c47cb963a18831a5c064809dc5537825"},{"url":"/assets/favicon-16x16.png","revision":"b75a08aca3b147e26ed9cb7f2d808ace"},{"url":"/assets/favicon-32x32.png","revision":"b3ecddfafc2d4104417defc95b632211"},{"url":"/assets/mstile-150x150.png","revision":"688d8338337e354915ada3a894487e15"},{"url":"/assets/android-chrome-512x512.png","revision":"997ff1b410905fffb9400e61519becd8"},{"url":"/assets/css/main.css","revision":"2032ddb204884f1aac965c59dd22ebb1"},{"url":"/assets/js/main.min.js","revision":"a1484344aa62583e7b5981b810678d12"},{"url":"/pendapat-saya-tentang-wordpress/","revision":"130d09651a0f3ec604798b0c5f6a3c62"},{"url":"/seharusnya-opt-out-dari-tracking-jadi-standar/","revision":"0689885717e536445575284320b54129"},{"url":"/pendapat-saya-tentang-medium/","revision":"b0d80f672b21c09f88d9b869e7c17b82"},{"url":"/30-days-writing-challenge-blogging-era-modern/","revision":"c339f7bf47d121cd96f01de5263c0a30"},{"url":"/perjalanan-sebuah-memori/","revision":"90c9736e6c70d805ca367b334f1fb687"},{"url":"/localhost-friendly-firefox/","revision":"6827101618842d0585c23d4096786dba"},{"url":"/wsl/","revision":"6d664926f4d180d149f749b41afa7f36"},{"url":"/hidup-bersama-perangkat-android-jadul/","revision":"d45384887b5fb77b464ce698cf3a32b9"}];

// set names for both precache & runtime cache
workbox.core.setCacheNameDetails({
    prefix: 'akhyarrh',
    suffix: 'v2',
    precache: 'precache',
    runtime: 'runtime-cache'
});

// let Service Worker take control of pages ASAP
workbox.core.skipWaiting();
workbox.core.clientsClaim();

// let Workbox handle our precache list
workbox.precaching.precacheAndRoute(self.__precacheManifest);

workbox.routing.registerRoute(
  /\.html$/,
  new workbox.strategies.NetworkFirst({
    plugins: [
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [200]
      })
    ]
  })
);

workbox.routing.registerRoute(
  /\.js$/,
  new workbox.strategies.CacheFirst()
);

// search index
workbox.routing.registerRoute(
  '/assets/js/lunr/lunr-store.js',
  new workbox.strategies.StaleWhileRevalidate()
);

workbox.routing.registerRoute(
  /\.css$/,
  new workbox.strategies.StaleWhileRevalidate()
);

workbox.routing.registerRoute(
  /\.(?:jpg|jpeg|png|svg|webp)$/,
  new workbox.strategies.CacheFirst({
    cacheName: 'images',
    plugins: [
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [200]
      }),
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 10, // Only cache 10 images ( TODO: is everything on precache already are counted ?)
        maxAgeSeconds: 60 * 60 * 24 * 90 // expired after 90 Days
      })
    ]
  })
);

workbox.routing.registerRoute(
  /^https?:\/\/cdn.statically.io/,
  new workbox.strategies.StaleWhileRevalidate()
);

workbox.routing.registerRoute(
  /^https?:\/\/source.unsplash.com/,
  new workbox.strategies.StaleWhileRevalidate()
);
workbox.routing.registerRoute(
  /^https?:\/\/images.unsplash.com/,
  new workbox.strategies.StaleWhileRevalidate()
);

workbox.routing.registerRoute(
  /^https?:\/\/github.githubassets.com/,
  new workbox.strategies.StaleWhileRevalidate()
);

workbox.routing.registerRoute(
  /^https?:\/\/cdn.jsdelivr.net/,
  new workbox.strategies.StaleWhileRevalidate()
);

workbox.routing.registerRoute(
  /^https?:\/\/robohash.org/,
  new workbox.strategies.StaleWhileRevalidate()
);

workbox.precaching.cleanupOutdatedCaches();

