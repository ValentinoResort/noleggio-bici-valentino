
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('bici-app-cache').then(cache => {
      return cache.addAll(['index.html', 'app_icon.png']);
    })
  );
});
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
