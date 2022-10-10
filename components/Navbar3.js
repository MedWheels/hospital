// import React from "react";
// import Link from "next/link";
// import Register from "../pages/register";
// import Router from "next/router"

 
// function NavBarOption({ item }) {
//   return (
//     <div className="px-4 py-4">
        
//       <Link href={item.link}>
//         <a>
//           <div className="text-sm text-[#edf3f7] py-1 group-hover:text-blue-400 ">
//             {item.title}
//           </div>
//         </a>
//       </Link>
//     </div>
//   );
// }

// function Navbar({ content }) {
//   return (
//     <div>
//       <div className="   h-[70px] bg-[url('/navbar.jpg')] bg-cover">
//         <div className="flex flex-row  ">
//           <div className="ml-5 mt-1 px-2 py-2">
//             <Link href="/">
//               <a>
//               <div className="flex flex-row ">
//                 <img
//                   className="hover:scale-105 duration-200"
//                   color="#1da1f2"
//                   src="/ambulance.svg"
//                   alt="ambulance image"
//                   height={45}
//                   width={45}
//                 ></img>
//                 <label className="text-white font-poppins-extrabold px-3 py-3 text-lg "> MedWheels</label></div>
//               </a>
//             </Link>
            
           
//           </div>    <div className="mr-20">
//           <div className="flex flex-row gap-2 pl-[130vh] ">
//             {content.map((item, index) => {
//               return <NavBarOption className="text-sm text-[#edf3f7]   py-1 group-hover:text-blue-400" key={index} item={item} />;
//             })}
             
//          </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
 
//           }
// export default Navbar;
