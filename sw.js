// Offline support. Pages are served from the saved copy first, so the app opens without internet.
// Each time it opens with internet, a fresh copy is fetched in the background and used on the next launch,
// so an updated index.html reaches the iPad after it has been opened twice. VERSION only needs changing to force a clean start.
const VERSION = "hebrewfunlearn-24";
const FILES = ["./", "index.html", "manifest.webmanifest", "icon-180.png", "icon-512.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES))); self.skipWaiting(); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET" || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(caches.open(VERSION).then(cache => cache.match(e.request, {ignoreSearch: true}).then(saved => {
    const fresh = fetch(e.request.url, {cache: "no-cache"}).then(res => { if (res && res.ok) cache.put(e.request, res.clone()); return res; });
    if (saved) { e.waitUntil(fresh.catch(() => {})); return saved; }
    return fresh;
  })));
});
