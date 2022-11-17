import React from "react";
import { getAuth,onAuthStateChanged,signOut,} from "firebase/auth";
import {verifyIdToken} from "../utils/firebaseAdmin";
// import {  } from '../services/firebase-messaging-sw';
import { useState,useEffect } from "react";
import Navbar from "../components/Navbar3"
import Modal  from "../components/modal";
// import { useNavigate, } from "react-router-dom";
import { useRouter } from "next/router";
import nookies from 'nookies';
import {app} from '../utils/firebase'
import { getMessaging, onMessage } from 'firebase/messaging';
import { useAuth } from "../utils/auth";



function Dashboard({session})
{
  // const app = ;
  const [showModal,setShowModal] = useState(false);
  // const navigate = useNavigate();
  const {user} = useAuth();
  const router = useRouter();
  const auth = getAuth(app);
  
  // console.log("user: "+auth.currentUser);
  const navBarContent = [
    {
      title: "FAQ's",
      link: "/wus",
    },
    {
      title: "Log Out",
      link: "#",
    },
  ];

  

  async function logout() {
    signOut(getAuth()).then((auth) => {
      console.log("Logged out from: "+toString(auth))
      // navigate("/login");
      router.replace("/login");
    }).catch((error) => {
      console.log(error);
    })
  }

  if(session){
    //recieve notifications
    // const messaging = messaging;
    // getFCMToken();

    // onMessage(messaging, (payload) => {
    //   console.log('Message received. ', payload);
    //   alert(payload);
    //   // ...
    // });

    if(user) console.log(user.email);


    // onAuthStateChanged(auth, (user) => {
    //   if (user) {
    //     // User is signed in, see docs for a list of available properties
    //     // https://firebase.google.com/docs/reference/js/firebase.User
    //     console.log(user.email)
    //     // ...
    //   } else {
    //     // User is signed out
    //     // ...
    //     console.log("nobody is signed in bruh.")
    //   }
    // });

    return(
      <>
      <Navbar className="text-orange-400 py-1 text-2xl group-hover:text-red-400" content={navBarContent} />
      <div className="  bg-cover min-h-screen w-full text-black">
        <div className="justify-items-stretch pl-40 pt-20  ">
          <div className="relative w-full max-w-lg  py-49">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          </div>
        </div>
        
        <h2 className="text-orange-500 text-4xl font-extrabold text-center"> DASHBOARD</h2>
        <h3 className="text-orange-500 text-4xl font-extrabold text-center">Hello !</h3>
        {/* <h3 className="text-orange-500 text-4xl font-extrabold text-center">Hello {auth.currentUser}!</h3> */}
        <button onClick={()=> setShowModal(true)} className="text-center p-2 rounded-md text-orange-500 border-orange-400 ml-[100vh] mt-3  border-2">Testing</button>
        <button onClick={()=> logout()} className="text-center p-2 rounded-md text-orange-500 border-orange-400 ml-[100vh] mt-3  border-2">LOGOUT</button>
      
        <Modal show={showModal} onClose={()=>setShowModal(false)} >
          This is a test Notification.
        </Modal>
      </div>
        </>
    );
  }
  else {
    return <h2 className="text-orange-500 text-4xl font-extrabold text-center"> Loading..</h2>
  }
    
}


export async function getServerSideProps(context) {
  try {
    const cookies = nookies.get(context);
    const token = await verifyIdToken(cookies.token);
    const {uid,email} = token;
    // console.log("current user: "+getAuth(app).currentUser);
    return {
      props: {
        session: `Your email is ${email} and uid is ${uid}.`
      },
    };
  } catch (error) {
    context.res.writeHead(302,{location: "/login"});
    context.res.end();
    return {props: []};
  }
}


export default Dashboard;