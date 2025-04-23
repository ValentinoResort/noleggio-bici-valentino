
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('noleggio-bici-cache').then((cache) => {
      return cache.addAll([
        'noleggio_bici.html',
        'logo.png',
        'app_icon.png'
      ]);
    })
  );
});
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
