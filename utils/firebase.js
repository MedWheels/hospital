import { initializeApp, getApp, getApps } from "firebase/app";
import { getMessaging } from "firebase/messaging";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
	apiKey:  process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain:  process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
	projectId:  process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
	databaseUrl: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
	storageBucket:  process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
	messagingSenderId:  process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
	appId:  process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
	measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
export const app = (!getApps.length)?initializeApp(firebaseConfig):getApp();


// // Initialize Firebase Cloud Messaging and get a reference to the service
// const messaging = getMessaging(app);