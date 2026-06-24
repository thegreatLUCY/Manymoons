/* Many Moons service worker — offline-capable PWA shell.
   App HTML is served network-first (so updates show when online);
   static assets (textures, icons, fonts) are cache-first.            */
const CACHE = 'manymoons-v2';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './textures/moon.webp',
  './textures/blood.webp',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const isNav = req.mode === 'navigate'
    || url.pathname === '/' || url.pathname.endsWith('/')
    || url.pathname.endsWith('index.html');

  if (isNav) {                                  // network-first for the app shell
    e.respondWith(
      fetch(req)
        .then(res => { const copy = res.clone(); caches.open(CACHE).then(c => c.put('./index.html', copy)); return res; })
        .catch(() => caches.match('./index.html').then(r => r || caches.match('./')))
    );
    return;
  }

  e.respondWith(                                // cache-first for everything else
    caches.match(req).then(hit => hit || fetch(req).then(res => {
      if (res.ok && (url.origin === location.origin || url.host.includes('gstatic') || url.host.includes('googleapis'))) {
        const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy));
      }
      return res;
    }).catch(() => hit))
  );
});
