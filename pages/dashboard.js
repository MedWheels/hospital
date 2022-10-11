 
import { useState,useEffect } from "react";
import Navbar from "../components/Navbar3"
import Modal  from "../components/modal";
export default function dashboard()
{
    const [showModal,setShowModal] = useState(false);

    const navBarContent = [
    
      {
        title: "FAQ's",
        link: "/wus",
      },
       
      {
        title: "Log Out",
        link: "#",
      },]

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
            <button onClick={()=> setShowModal(true)} className="text-center p-2 rounded-md text-orange-500 border-orange-400 ml-[100vh] mt-3  border-2">Testing</button>
      
       <Modal show={showModal} onClose={()=>setShowModal(false)} >

       ALERT ALERT ALERT ALERT ALERT ALERT ALERT ALERT

       </Modal>
       
       
       
        </div>
        </>
    )
}