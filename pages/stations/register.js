
import React, { useState } from "react";
import Link from "next/link";
import Router from "next/router";
import Navbar from "../../components/Navbar2";

function Register({}) {
    const [view, setView] = useState(false);
    const navBarContent = [
   
        {
          title: "About Us",
          link: "/about",
        },
        {
          title: "Write to us",
          link: "/wus",
        },
      ];
  return (
    
    <div>
        <Navbar className="text-[#edf3f7] py-1  group-hover:text-blue-400" content={navBarContent} />
      <section className="bg-white-0 dark:bg-gray-900">
      <div className="absolute bg-[url('/backgrounIndex.jpg')] bg-cover w-screen pt-[300px] h-screen pb-[150vh]">


  <div className="static flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    
      <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
             
      </a>
      <div className="absolute w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create and account
              </h1>
              <form className="space-y-2 md:space-y-4" action="#">
                  <div>
                      <label htmlFor="hospitalname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Hospital Name</label>
                      <input type="hospitalname" name="hospitalname" id="hospitalname" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name" required=""></input>
                  </div>
                  <div>
                      <label htmlFor="abbreviation" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Hospital Abbreviation(If any)</label>
                      <input type="abbreviation" name="abbreviation" id="abbreviation" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name" required=""></input>
                  </div>
                  <div>
                      <label htmlFor="govt/private" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Govt/Private</label>
                      <input type="govt/private" name="govt/private" id="govt/private" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required=""></input>
                  </div>
                  <div>
                      <label htmlFor="state" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">State</label>
                      <input type="state" name="state" id="state" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Karnataka" required=""></input>
                  </div>
                  <div>
                      <label htmlFor="district" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">District</label>
                      <input type="district" name="district" id="district" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bangalore" required=""></input>
                  </div>
                  <div>
                      <label htmlFor="pincode" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pincode</label>
                      <input type="pincode" name="pincode" id="pincode" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="560100" required=""></input>
                  </div>
                  <div>
                      <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                      <input type="address" name="address" id="address" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ashjsgnvbc uyhfjdnmmxnc,x" required=""></input>
                  </div>
                  <div>
                      <label htmlFor="about" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">About Hospital</label>
                      <input type="about" name="about" id="about" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ghjsfjsklgllgutgyuryhfduhfjshdf" required=""></input>
                  </div>
                  <div>
                      <label htmlFor="contactnumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact Number</label>
                      <input type="contactnumber" name="contactnumber" id="contactnumber" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bangalore" required=""></input>
                  </div>
                  <div>
                      
<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="file_input">Upload Hospital License</label>
<input className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file"></input>
<p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>

                  </div>
                  <div>
                      <label htmlFor="id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Hospital ID</label>
                      <input type="id" name="id" id="id" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bangalore" required=""></input>
                  </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Hospital email</label>
                      <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""></input>
                  </div>

                  <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""></input>
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                      </div>
                  </div>
                  
                    <button type="submit" className=" ring-1 ring-sky-400 text-sky-400 hover:bg-sky-400 hover:text-black w-full   bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Register  </button>

                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account? 
                      <Link href="/login">
                        <a  className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                      </Link>
                      
                  </p>
              </form>
          </div>
      </div>
  </div>
  </div>
</section>
    </div>
  )
}

export default Register
