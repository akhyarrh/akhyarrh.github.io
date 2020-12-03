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
