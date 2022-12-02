import '../styles/globals.css';
// import { firebaseCloudMessaging } from '../utils/webpush';
// import { getMessaging, onMessage } from 'firebase/messaging';
// import { useEffect } from 'react';
import { AuthProvider } from '../utils/auth';
import "react-toastify/dist/ReactToastify.css";



function MyApp({ Component, pageProps }) {

  // useEffect(() => {

  //   setToken();
    
  //   // Event listener that listens for the push notification event in the background
  //   if ("serviceWorker" in navigator) {
  //     navigator.serviceWorker.addEventListener("message", (event) => {
  //       console.log("event for the service worker", event);
  //     });
  //   }
    
  //   async function setToken() {
  //     try {
  //       const token = await firebaseCloudMessaging.init();
  //       if (token) {
  //         console.log("token: "+token)
  //         getMessage();
  //       }
  //     } catch (error) {
  //       console.log("settoken error: "+error);
  //     }
  //   }
  //   function getMessage() {
  //     const messaging = getMessaging();
  //     // console.log({ messaging });
  //     onMessage(messaging,(payload) => {
  //       console.log(payload);
  //       // const { title, body } = JSON.parse(payload.data.notification);
  //       const title = payload.notification.title;
  //       var options = {
  //         body: payload.notification.body,
  //       };
  //       navigator.serviceWorker.getRegistration().then(reg => {
  //         reg.showNotification(title, options);
  //       }).catch( err => {
  //         console.log(err);
  //       });
  //       // self.registration.showNotification(title, options);
  //     });

  //   }
  // }, []);





  // useEffect(() => {
  //   registerServiceWorker();
    
  //   function registerServiceWorker() {
  //     // if (typeof global.navigator === 'undefined') global.navigator = {};
  //     if ("serviceWorker" in navigator) {
  //       // console.log("here")
  //       navigator.serviceWorker.getRegistrations().then(function(registrations) {
  //         for(let registration of registrations) {
  //           registration.
  //           registration.unregister()
  //         }
  //         navigator.serviceWorker.register("/firebase-messaging-sw.js", {
  //           scope: "/",
  //         }).then((registration) => {
  //           console.log("Service Worker registered with scope: "+registration.scope);
  //         }).catch((err) => {
  //           console.log("Registration failed with: "+err);
  //         });
  //       }).catch(err => {
  //         console.log(err);
  //       })

  //       // const registration = await navigator.serviceWorker.register("../public/firebase-messaging-sw.js");
  //       // if (registration.installing) {
  //       //   console.log("Service worker installing");
  //       // } else if (registration.waiting) {
  //       //   console.log("Service worker installed");
  //       // } else if (registration.active) {
  //       //   console.log("Service worker active");
  //       // }
  //     }
  //     else console.log("service worker not supported");
  //   };


  // }, []);

  return (  <>
    <AuthProvider>
      <Component {...pageProps} /> 
    </AuthProvider>
  
  </>

)}


// export async function getStaticProps(context) {

//   if ("serviceWorker" in navigator) {
//     // console.log("here")
//     navigator.serviceWorker.getRegistrations().then(function(registrations) {
//       for(let registration of registrations) {
//         // registration.
//         registration.unregister()
//       }
//       navigator.serviceWorker.register("/firebase-messaging-sw.js", {
//         scope: "/",
//       }).then((registration) => {
//         console.log("Service Worker registered with scope: "+registration.scope);
//       }).catch((err) => {
//         console.log("Registration failed with: "+err);
//       });
//     }).catch(err => {
//       console.log(err);
//     })

//   }
//   else console.log("service worker not supported");
//   return {props: {},}
// } 

export default MyApp
