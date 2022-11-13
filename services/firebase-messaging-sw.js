import { getMessaging, getToken, } from "firebase/messaging/sw";
import { getAuth } from 'firebase/auth';
import { firebase, initializeApp, getApps, getApp } from "firebase/app";
import { isSupported } from "firebase/messaging";
// import { getAnalytics } from "firebase/analytics";

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

export const app = initializeApp(firebaseConfig);

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.

var messaging;

try {
	messaging = getMessaging(app);
} catch (error) {
	console.log("error: "+error);
}

export function getFCMToken() {
	
	const auth = getAuth(app);
	const user = auth.currentUser;

	if (user) {
		// User is signed in, see docs for a list of available properties
		// https://firebase.google.com/docs/reference/js/firebase.User
		// ...
	
		try {
			// Get registration token. Initially this makes a network call, once retrieved
			// subsequent calls to getToken will return from cache.
			console.log('Requesting permission...');
			Notification.requestPermission().then( async (permission) => {
				if (permission === 'granted') {
					console.log('Notification permission granted.');
					const messaging = getMessaging();
					await getToken(messaging, { vapidKey: process.env.NEXT_PUBLIC_VAPID_KEY }).then((currentToken) => {
						if (currentToken) {
							// Send the token to your server and update the UI if necessary
							// ...
							console.log(currentToken);
							return messaging;
	
	
							//TODO:put the following code in a separate api call to update db 
							// const ref = doc(db, "hospitals", user);
							// updateDoc(ref, {
							// 	token: currentToken,
							// 	timestamp: serverTimestamp(),
							// });
						} else {
						// Show permission request UI
						console.log('No registration token available.');
						// ...
						}
					});
				}
				else {
					console.log("Notification permission denied.");
				}
	
			}).catch((err) => {
			console.log('An error occurred while retrieving token. ', err);
			// ...
			});
	
		} catch (error) {
			console.log("error: "+error);
		}
	
		
	} else {
	// No user is signed in.
		console.log("No user is signed in.")
	}
	
}
