import '../styles/globals.css';
import { firebaseCloudMessaging } from '../utils/webpush';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { useEffect } from 'react';
import { AuthProvider } from '../utils/auth';


function MyApp({ Component, pageProps }) {

  useEffect(() => {

    setToken();

    async function setToken() {
      try {
        const token = await firebaseCloudMessaging.init();
        if (token) {
          console.log("token: "+token)
          getMessage();
        }
      } catch (error) {
        console.log("settoken error: "+error);
      }
    }
    function getMessage() {
      const messaging = getMessaging();
      // console.log({ messaging });
      // onMessage(messaging,(payload) => {
      //   const { title, body } = JSON.parse(payload.data.notification);
      //   var options = {
      //     body,
      //   };
        
      //   self.registration.showNotification(title, options);
      // });

    }
  }, []);

  useEffect(() => {
    registerServiceWorker();
    
    async function registerServiceWorker() {
      if (typeof global.navigator === 'undefined') global.navigator = {};
      if ("serviceWorker" in navigator) {
        try {
          const registration = await navigator.serviceWorker.register("../public/firebase-messaging-sw.js", {
            scope: "/",
          });
          if (registration.installing) {
            console.log("Service worker installing");
          } else if (registration.waiting) {
            console.log("Service worker installed");
          } else if (registration.active) {
            console.log("Service worker active");
          }
        } catch (error) {
          console.error(`Registration failed with ${error}`);
        }
      }
      else console.log("service worker not supported");
    };


  }, []);

  return (  <>
    <AuthProvider>
      <Component {...pageProps} /> 
    </AuthProvider>
  
  </>
)}

export default MyApp
