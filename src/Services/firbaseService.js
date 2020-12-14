import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCNCOHUFIknq9NsJ072uzndsWePgQsn3pY",
    authDomain: "notificationapp-6b996.firebaseapp.com",
    projectId: "notificationapp-6b996",
    storageBucket: "notificationapp-6b996.appspot.com",
    messagingSenderId: "621435229569",
    appId: "1:621435229569:web:1eeabedc1b594e7087c480"
  };
  
  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();

export function configNotification() {
    Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
            console.log('Notification permission granted.');
            messaging.getToken().then((currentToken) => {
                if (currentToken) {
                    console.log("Token => ",currentToken);
                } else {
                    console.log('No registration token available. Request permission to generate one.');
                }
            }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
            });
        } else {
            console.log('Unable to get permission to notify.');
        }
    })
}