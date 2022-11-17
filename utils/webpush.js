import 'firebase/messaging';
import firebase, { getApps, initializeApp, getApp } from 'firebase/app';
import localforage from 'localforage';
import { getMessaging, getToken } from 'firebase/messaging';

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


const firebaseCloudMessaging = {
	//checking whether token is available in indexed DB
	tokenInlocalforage: async () => {
	  return localforage.getItem('fcm_token');
	},
  
	//initializing firebase app
	init: async function () {
	  	if (!getApps.length) initializeApp(firebaseConfig);
		else getApp();
  
		try {
		  const messaging = getMessaging();
		  console.log("here")
		  const tokenInLocalForage = await this.tokenInlocalforage();
  
		  //if FCM token is already there just return the token
		  if (tokenInLocalForage !== null) {
			return tokenInLocalForage;
		  }
  
		  //requesting notification permission from browser
		  const status = await Notification.requestPermission();
		  if (status && status === 'granted') {
			//getting token from FCM
			const fcm_token = await getToken(messaging, { vapidKey: process.env.NEXT_PUBLIC_VAPID_KEY });
			if (fcm_token) {
			  //setting FCM token in indexed db using localforage
			  console.log("token: "+fcm_token);
			  localforage.setItem('fcm_token', fcm_token);
			  //return the FCM token after saving it
			  return fcm_token;
			}
		  }
		} catch (error) {
		  console.error("webpush error"+error);
		  return null;
		}
	},
  };
  export { firebaseCloudMessaging };