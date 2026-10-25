const CACHE = "bleu-blanc-quiz-public-20261025-mises-en-situation";
const APP_FILES = [
  "./",
  "./index.html",
  "./styles.css",
  "./data.js",
  "./french-overrides.js",
  "./legacy-valeurs-institutions.js",
  "./legacy-droits-societe.js",
  "./legacy-histoire.js",
  "./official-complement.js",
  "./valeurs-institutions.js",
  "./droits-societe.js",
  "./histoire.js",
  "./geographie-culture.js",
  "./approfondissement-valeurs.js",
  "./approfondissement-droits-societe.js",
  "./approfondissement-histoire-culture.js",
  "./supplements.js",
  "./official-tricky-valeurs-droits.js",
  "./official-tricky-institutions.js",
  "./official-tricky-histoire-societe.js",
  "./official-training.js",
  "./mock-blueprint.js",
  "./mock-rotation.js",
  "./app.js",
  "./manifest.webmanifest",
  "./icon.svg",
  "./assets/questions-naturalisation-officielles.pdf",
  "./assets/official-source-manifest.json",
  "./assets/catalogue-fiches-2026-10-21.json",
  "./assets/livret-du-citoyen-mai-2026.pdf"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(APP_FILES)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((key) => key.startsWith("bleu-blanc-quiz-public-") && key !== CACHE).map((key) => caches.delete(key))))
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET" || new URL(event.request.url).origin !== location.origin) return;
  event.respondWith(
    fetch(event.request).then((response) => {
      if (response.ok) {
        const copy = response.clone();
        caches.open(CACHE).then((cache) => cache.put(event.request, copy));
      }
      return response;
    }).catch(async () => (await caches.match(event.request)) || caches.match(event.request, { ignoreSearch: true }))
  );
});
