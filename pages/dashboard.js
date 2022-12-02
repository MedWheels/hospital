import React from "react";
import { getAuth,signOut,} from "firebase/auth";
import {verifyIdToken} from "../utils/firebaseAdmin";
import { useState,useEffect, useRef } from "react";
import Navbar from "../components/Navbar3"
import Modal  from "../components/modal";
import { useRouter } from "next/router";
import nookies from 'nookies';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { useAuth } from "../utils/auth";
import { verifyFCMToken } from "../utils/webpush";
import PushNotificationLayout from "../components/PushNotificationLayout";
import { onMessage, getMessaging } from "firebase/messaging";
import {app} from "../utils/firebase"


function Dashboard({session})
{
  const [editbool,setEditBool] = useState(false);
  const [showModal,setShowModal] = useState(false);
  const {user} = useAuth();
  const router = useRouter();
  // const messaging = getMessaging(app);

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



  //data related

  const gridRef = useRef();
  var [table_data, settabledata] = useState([
    
    {
      slNo: "1", ambulanceDriver: "Vishal.B", vehicleNumber: "KA 02 E5 23",
      pickupCoordinates: "[-123.23323232,32.32323]", status:"Active", severity:"High"
    },
    {
      slNo: "2", ambulanceDriver: "Vishal.A", vehicleNumber: "KA 01 E5 23",
      pickupCoordinates: "[-123.23323232,32.32323]", status:"Active", severity:"Low"
    },
    {
      slNo: "3", ambulanceDriver: "Vishal.R", vehicleNumber: "KA 03 E5 23",
      pickupCoordinates: "[-123.23323232,32.32323]", status:"Passive", severity:"Low"
    }
  ])
  var [Show_table, setShow_table] = useState(false)
  const [column_Table, setcolumn_Table] = useState(
    [
      { field: "slNo", headerName: "Serial Number", width: 200, resizable: true, checkboxSelection: true },
      { field: "ambulanceDriver", headerName: "Ambulance Driver", width: 200, resizable: true },
      { field: "vehicleNumber", headerName: "VehicleNumber", width: 200, resizable: true },
      { field: "pickupCoordinates", headerName: "Pickup Coordinates", width: 200, resizable: true },
      { field: "status", headerName: "Status", width: 200, resizable: true },
      { field: "severity", headerName: "Severity", width: 200, resizable: true },
    ]
  )
 
  
  if(session){
    //recieve notifications
    // const messaging = messaging;
    // getFCMToken();

    // onMessage(messaging, (payload) => {
    //   console.log('Message received. ', payload);
    //   console.log("At Dashboard: "+payload.notification.body);
    //   // alert(payload);
    //   // ...
    // });

    // if(user) console.log(user.email);
    if(user){
      verifyFCMToken(user.email);



      return(
        <>
        <PushNotificationLayout>
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
            <h3 className="text-orange-500 text-4xl font-extrabold text-center">Hello {user.email}!</h3>
            {/* <h3 className="text-orange-500 text-4xl font-extrabold text-center">Hello {auth.currentUser}!</h3> */}
            <button onClick={()=> setShowModal(true)} className="text-center p-2 rounded-md text-orange-500 border-orange-400 ml-[100vh] mt-3  border-2">Testing</button>
            <button onClick={()=> logout()} className="text-center p-2 rounded-md text-orange-500 border-orange-400 ml-[100vh] mt-3  border-2">LOGOUT</button>
          
            <Modal show={showModal} onClose={()=>setShowModal(false)} >
              This is a test Notification.
            </Modal>
              
            <div className=" ag-theme-alpine   text-center pt-10 pl-20 text-blue-800 h-[50vh] w-[200vh]">
              <AgGridReact
                ref={gridRef}   
                className='pt-2 text-center'
                rowData={table_data}
                columnDefs={column_Table}
                rowHeight={50}
                defaultColDef={{editable: true, filter: true, resizable: true, floatingFilter:true, sortable:true , filter:true,flex:1}}
                rowSelection='multiple'
              >
              </AgGridReact>
            </div> 
          </div>
        </PushNotificationLayout>
          </>
      );
    }
    else{
      return <h2 className="text-orange-500 text-4xl font-extrabold text-center"> Loading..</h2>
    }
    
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

    return {
      props: {
        session: `Your email is ${email} and uid is ${uid}.`
      },
    };
  } catch (error) {
    //redirect to login page
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
      props: {},
    };
  }
}


export default Dashboard;