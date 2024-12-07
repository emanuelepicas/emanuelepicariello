module.exports = {
  globDirectory: './dist/', // Replace with './public/' if `public` is your output folder
  globPatterns: [
    '**/*.{html,js,css,png,jpg,svg}'
  ],
  swDest: './dist/service-worker.js', // Destination for the generated service worker
  runtimeCaching: [
    {
      urlPattern: ({ request }) => request.destination === 'image',
      handler: 'CacheFirst',
      options: {
        cacheName: 'images',
        expiration: {
          maxEntries: 50,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
        },
      },
    },
    {
      urlPattern: ({ request }) => request.destination === 'script' || request.destination === 'style',
      handler: 'StaleWhileRevalidate',
      options: {
        cacheName: 'assets',
      },
    },
  ],
};
