const CACHE = 'nook-v1';
const ASSETS = [
  '/Nook/',
  '/Nook/index.html',
  '/Nook/css/styles.css',
  '/Nook/js/config.js',
  '/Nook/js/db.js',
  '/Nook/js/utils.js',
  '/Nook/js/auth.js',
  '/Nook/js/customer.js',
  '/Nook/js/staff.js',
  '/Nook/js/admin.js',
  '/Nook/js/app.js',
  '/Nook/manifest.json',
  '/Nook/icons/icon-192.png',
  '/Nook/icons/icon-512.png'
];

// Install: cache all assets
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// Activate: clean up old caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch: serve from cache, fall back to network
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
