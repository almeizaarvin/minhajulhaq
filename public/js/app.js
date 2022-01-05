  
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js');
}
  
// navigator.serviceWorker.register('firebase-messaging-sw.js')
// .then(function(registration) {
//     firebase.messaging().useServiceWorker(registration);
// }).catch(function(err) {
//   console.log('Service worker registration failed, error:', err);
// });