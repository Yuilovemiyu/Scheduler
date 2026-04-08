importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyADXlQJcV5KJXTfYBK5qscv7gd88-XNlKo",
  authDomain: "today-s-reporter-3dceb.firebaseapp.com",
  projectId: "today-s-reporter-3dceb",
  messagingSenderId: "199675534168",
  appId: "1:199675534168:web:ff4dee799c1a0749c2e32d"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: 'icon.png'
  });
});
