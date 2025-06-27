importScripts('https://cdn.jsdelivr.net/npm/workbox-cdn/workbox/workbox-sw.js');

workbox.routing.registerRoute(
    ({request}) => request.destinartion === 'image',
    new workbox.strategies.NetworkFirst()
)
