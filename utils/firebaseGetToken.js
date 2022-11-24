import { getMessaging, getToken } from "firebase/messaging";
import { getAuth } from "firebase/auth";
import { doc, updateDoc, serverTimestamp } from "firebase/firestore";


export default function getFCMToken() {
	
	const auth = getAuth();
	const user = auth.currentUser;

	if (user) {
		// User is signed in, see docs for a list of available properties
		// https://firebase.google.com/docs/reference/js/firebase.User
		// ...
	
		try {
			// Get registration token. Initially this makes a network call, once retrieved
			// subsequent calls to getToken will return from cache.
			console.log('Requesting permission...');
			Notification.requestPermission().then((permission) => {
				if (permission === 'granted') {
					console.log('Notification permission granted.');
					const messaging = getMessaging();
					getToken(messaging, { vapidKey: process.env.NEXT_PUBLIC_VAPID_KEY }).then((currentToken) => {
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




