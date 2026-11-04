// La app abre aunque no haya internet. Busca primero en la red (para recibir
// las razas nuevas) y usa la copia guardada si no hay conexión.
const CACHE = 'mi-raza-v1';
const BASE = ['./', './index.html', './app.js', './razas.js', './manifest.json', './icon-192.png', './icon-512.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(BASE)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  e.respondWith(fetch(req).then(res => { if (res.ok) { const c = res.clone(); caches.open(CACHE).then(x => x.put(req, c)); } return res; })
    .catch(() => caches.match(req).then(r => r || caches.match('./index.html'))));
});
