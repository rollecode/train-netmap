// Service worker: keeps the page and the map tiles available with no connection.
// Only runs when the page is served over http(s); file:// pages cannot register one.
const SHELL = 'netmap-shell-v1', TILES = 'netmap-tiles-v1';
const ASSETS = ['./', './index.html', './config.js', './vendor/leaflet/leaflet.js', './vendor/leaflet/leaflet.css', './data/fi-mobile.js', './icon-good.png', './icon-bad.png', './icon-warn.png', './data/fi-masts.js'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(SHELL).then(c => Promise.all(ASSETS.map(a => c.add(a).catch(() => {})))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => { e.waitUntil(self.clients.claim()); });

self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (u.hostname === 'basemaps.cartocdn.com') {
    // Tiles change rarely, so the cached copy wins; the whole point is having them in dead zones.
    e.respondWith(caches.open(TILES).then(async c => (await c.match(e.request)) || fetch(e.request).then(r => { if (r.ok || r.type === 'opaque') c.put(e.request, r.clone()); return r; })));
  } else if (u.origin === location.origin) {
    // The page itself comes from the network when possible so edits show up, from the cache when offline.
    e.respondWith(fetch(e.request).then(r => { caches.open(SHELL).then(c => c.put(e.request, r.clone())); return r; }).catch(() => caches.match(e.request)));
  }
});
