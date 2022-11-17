import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging/sw";

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
const firebaseApp = initializeApp({
	apiKey:  process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain:  process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
	projectId:  process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
	databaseUrl: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
	storageBucket:  process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
	messagingSenderId:  process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
	appId:  process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
	measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = getMessaging(firebaseApp);