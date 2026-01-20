const CACHE_NAME = "quran-app-v1";

const urlsToCache = ["/", "/manifest.json"];

// Install
self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      await cache.addAll(urlsToCache);
    })(),
  );

  self.skipWaiting();
});

// Activate
self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const cacheNames = await caches.keys();
      await Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        }),
      );
    })(),
  );

  self.clients.claim();
});

// Fetch
self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip kalo bukan GET
  if (request.method !== "GET") {
    return;
  }

  // Cache EXTERNAL API (equran.id/api/v2/surat)
  if (
    url.hostname === "equran.id" &&
    url.pathname.startsWith("/api/v2/surat")
  ) {
    event.respondWith(
      (async () => {
        try {
          const response = await fetch(request);

          if (response.status === 200) {
            const cache = await caches.open(CACHE_NAME);
            await cache.put(request, response.clone());
          }

          return response;
        } catch {
          return await caches.match(request);
        }
      })(),
    );

    return;
  }

  // Cache INTERNAL pages (Next.js)
  if (url.origin !== self.location.origin) {
    return;
  }

  if (url.pathname.startsWith("/api/")) {
    return;
  }

  event.respondWith(
    (async () => {
      try {
        const response = await fetch(request);

        if (response.status === 200) {
          const cache = await caches.open(CACHE_NAME);
          await cache.put(request, response.clone());
        }

        return response;
      } catch {
        return await caches.match(request);
      }
    })(),
  );
});
