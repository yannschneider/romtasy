// Minimal app-shell cache. The book data itself always comes fresh from
// the network (Open Library / the CORS proxy) — this only makes the page
// shell (HTML/CSS/JS/icons) load instantly on repeat visits and keeps the
// app installable/launchable even with a flaky connection.

const CACHE_NAME = "romantasy-tracker-shell-v1";
const SHELL_FILES = [
  "./index.html",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(SHELL_FILES))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  // Only handle same-origin app-shell requests from cache-first.
  // Everything else (Open Library, Booknode, marketplaces, the CORS
  // proxy) always goes straight to the network — never cached, always live.
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
