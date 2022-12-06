import React, { useEffect } from "react";
import { getMessaging, onMessage } from 'firebase/messaging';
import { query, getFirestore, collection, getDocs, where } from "firebase/firestore";
import { firebaseCloudMessaging } from "../utils/webpush";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";
import axios from "axios";
import endpoints from "../utils/endpoints";
import { useAuth } from "../utils/auth";

function PushNotificationLayout({ children }) {
  
  const {user} = useAuth();
  
  const router = useRouter();
  useEffect(() => {
    setToken();

    // Event listener that listens for the push notification event in the background
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.addEventListener("message", (event) => {
        console.log("event for the service worker", event);
      });
    }

    // Calls the getMessage() function if the token is there
    async function setToken() {
      try {
        const token = await firebaseCloudMessaging.init();
        if (token) {
          console.log("token: "+token);
          getMessage();
        }
      } catch (error) {
        console.log("settoken error: "+error);
      }
    }
  });


  // Handles the click function on the toast showing push notification
  const handleClickPushNotification = (payload) => {
  try {    
    console.log("data: "+JSON.stringify(payload?.data));
    const db = getFirestore();
    const collectionref = collection(db, payload.data.target);
    const q = query(collectionref, where("username", "==", user.email));
    getDocs(q).then((querySnapshots) => {
      var data = querySnapshots.docs[0].data();
      if(data){
        axios.post(endpoints.accept,{
          name:data.name,
          targetUid:data.uid,
          lat:data.geopoint.latitude,
          lng:data.geopoint.longitude,
          uid:payload.data.uid,
          token:payload.data.token,
          target:payload.data.target,
          userLat:payload.data.lat,
          userLng:payload.data.lng
        }).then(res => {
          console.log(res);
        }).catch(err => {
          console.log(err);
        })
      }
      else {
        console.log("Error fetching info from database.");
      }
    }).catch((err) => {
      console.log(err);
    });
  } catch(err) {
    console.log(err);
  }

	// router.push(url);
  };

  // Get the push notification message and triggers a toast to display it
  function getMessage() {
    const messaging = getMessaging();
    onMessage(messaging,(payload) => {
      
      //use modal here:
      toast(
        // <div onClick={() => handleClickPushNotification(payload?.data?.url)}>
        //   <h5>{payload?.notification?.title}</h5>
        //   <h6>{payload?.notification?.body}</h6>
        // </div>,
        <div onClick={() => handleClickPushNotification(payload)}>
          <h5>{payload?.notification?.title}</h5>
          <h6>{payload?.notification?.body}</h6>

        </div>,
        {
        //   closeOnClick: false,
          closeOnClick: true,
        }
      );
    });
  }

  return (
    <>
      <ToastContainer />
      {children}
    </>
  );
}

export default PushNotificationLayout;