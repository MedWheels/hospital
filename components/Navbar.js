import React from "react";
import Link from "next/link";

function NavBarOption({ item }) {
  return (
    <div className="px-4 py-4">
        
      <Link href={item.link}>
        <a>
          <div className="text-sm text-[#edf3f7] py-1 group-hover:text-blue-400 ">
            {item.title}
          </div>
        </a>
      </Link>
    </div>
  );
}

function Navbar({ content }) {
  return (
    <div>
      <div className="   h-[70px] bg-[url('/backgroundIndex.jpg')] bg-cover">
        <div className="flex flex-row justify-between">
          <div className="ml-5 mt-1 px-2 py-2">
            <Link href="/">
              <a>
              <div className="flex flex-row ">
                <img
                  className="hover:scale-105 duration-200"
                  color="#1da1f2"
                  src="/ambulance.svg"
                  alt="ambulance image"
                  height={45}
                  width={45}
                ></img>
                <label className="text-white font-poppins-extrabold px-3 py-3 text-lg "> MedWheels</label></div>
              </a>
            </Link>
            
           
          </div>    <div className="mr-60">
          <div className="flex flex-row ">
            {content.map((item, index) => {
              return <NavBarOption className="text-sm text-[#edf3f7]   py-1 group-hover:text-blue-400" key={index} item={item} />;
            })}
            <button className="  ml px-3 h-7 w-cover mt-4 ml-10 ring-1   bg-transparent text-sky-400 hover:bg-sky-700">Login</button></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
