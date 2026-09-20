const CACHE_NAME = 'kishoreverse-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/assets/Kishore_Kumar.png',
  '/assets/Kishore_Kumar_mobile.png',
  '/assets/Kishore_Kumar_tab.png',
  '/assets/Kishore_Kumar_16x9.png',
  '/assets/apple-touch-icon.png',
  '/assets/favicon-32.png',
  '/assets/favicon.ico',
  '/manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});