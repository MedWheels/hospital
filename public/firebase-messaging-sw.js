// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/9.13.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.13.0/firebase-messaging-compat.js');


// const firebase = require("firebase/app");
// const messaging = require("firebase/messaging/sw");
// import { initializeApp } from "firebase/app";
// import { getMessaging } from "firebase/messaging/sw";

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
	apiKey:  "AIzaSyBeetoUifbeo1AS2ZV5JyT6tgAOSIQYBLw",
	authDomain:  "medwheels-7ad75.firebaseapp.com",
	projectId:  "medwheels-7ad75",
	databaseUrl: "https://medwheels-7ad75-default-rtdb.firebaseio.com",
	storageBucket:  "medwheels-7ad75.appspot.com",
	messagingSenderId:  "307003859797",
	appId:  "1:307003859797:web:359518e8bb993d22d885dc",
	measurementId: "G-55YH9N4SSG"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
	console.log('[firebase-messaging-sw.js] Received background message ', payload);
	// Customize notification here
	console.log("notification test-data: "+ payload.notification.body)
	// console.log(payload.data)
	const notificationTitle = 'Background Message Title';
	const notificationOptions = {
	  body: 'Background Message body.',
	  icon: '/ambulance_green.png'
	};
  
	self.registration.showNotification(notificationTitle,
	  notificationOptions);
  });