importScripts('https://www.gstatic.com/firebasejs/8.1.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.1.2/firebase-messaging.js');

const firebaseConfig = {
  apiKey: "AIzaSyCNCOHUFIknq9NsJ072uzndsWePgQsn3pY",
  authDomain: "notificationapp-6b996.firebaseapp.com",
  projectId: "notificationapp-6b996",
  storageBucket: "notificationapp-6b996.appspot.com",
  messagingSenderId: "621435229569",
  appId: "1:621435229569:web:1eeabedc1b594e7087c480"
};

firebase.initializeApp(firebaseConfig);
firebase.messaging();