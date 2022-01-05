self.addEventListener('install', evt => {
    console.log('service worker installed')
});

self.addEventListener('activate', evt => {
    console.log('service worker activated')
});

self.addEventListener('fetch', evt =>{
    console.log('fetch event', evt)
});


// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.8.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
// var firebaseConfig = {
//     apiKey: "AIzaSyDKBlxfqWsSUDZXSDlmRfEFqawNi8nlivs",
//     authDomain: "minhajulhaq-24fa9.firebaseapp.com",
//     projectId: "minhajulhaq-24fa9",
//     storageBucket: "minhajulhaq-24fa9.appspot.com",
//     messagingSenderId: "885526744173",
//     appId: "1:885526744173:web:33f2ffba965a65f95b0364",
//     measurementId: "G-HPRD4HJVBY"
//   };
  
//   firebase.initializeApp(firebaseConfig);

// // Retrieve an instance of Firebase Messaging so that it can handle background
// // messages.
// const messaging = firebase.messaging();


// messaging.onBackgroundMessage((payload) => {
//     console.log('[firebase-messaging-sw.js] Received background message ', payload);
//     // Customize notification here
//     const notificationTitle = 'Background Message Title';
//     const notificationOptions = {
//       body: 'Background Message body.',
//       icon: '/firebase-logo.png'
//     };
  
//     self.registration.showNotification(notificationTitle,
//       notificationOptions);
//   });


// // Give the service worker access to Firebase Messaging.
// // Note that you can only use Firebase Messaging here. Other Firebase libraries
// // are not available in the service worker.
// importScripts('https://www.gstatic.com/firebasejs/8.8.1/firebase-app.js');
// importScripts('https://www.gstatic.com/firebasejs/8.8.1/firebase-messaging.js');

// // Initialize the Firebase app in the service worker by passing in
// // your app's Firebase config object.
// // https://firebase.google.com/docs/web/setup#config-object
// var firebaseConfig = {
//     apiKey: "AIzaSyDKBlxfqWsSUDZXSDlmRfEFqawNi8nlivs",
//     authDomain: "minhajulhaq-24fa9.firebaseapp.com",
//     projectId: "minhajulhaq-24fa9",
//     storageBucket: "minhajulhaq-24fa9.appspot.com",
//     messagingSenderId: "885526744173",
//     appId: "1:885526744173:web:33f2ffba965a65f95b0364",
//     measurementId: "G-HPRD4HJVBY"
//   };
  
//   firebase.initializeApp(firebaseConfig);

// // Retrieve an instance of Firebase Messaging so that it can handle background
// // messages.
// const messaging = firebase.messaging();