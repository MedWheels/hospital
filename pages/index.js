 
import Navbar from "../components/Navbar"
import { useEffect,useState } from 'react'
import Typewriter from "typewriter-effect";
import Link from "next/link";
 

export default function Home() {
  const navBarContent = [
    
    {
      title: "About Us",
      link: "/about",
    },
    {
      title: "Services",
      link: "/services",
    },
    {
      title: "Write to us",
      link: "/wus",
    },]


    
    const [index ,setIndex] = useState(0)
    const [index1 ,setIndex1] = useState(1)
    const [trans , setTrans] = useState(false)
    const [transR , setTransR] = useState(false);
    const [activeIndex , setActiveIndex] = useState(0)
     
    useEffect(() => {
      if(transR) {
        setTimeout(() => {
          setTransR(false)
        },700)
      }
      
      if(trans ) {
        setTimeout(() => {
          setTrans(false)
          setIndex((index + 1) % images.length );
          setIndex1((index1 + 1) % images.length )
        },800)
      }
    }, [trans ,transR])
    
      const images = [
                  { name : 'img1.jpg'},
                  { name : 'img2.jpg'},
                  { name : 'img3.jpg'},
                  { name : 'img4.jpg'},
                  { name : 'img5.jpg'},
                  { name : 'img6.jpg'},
                  { name : 'img7.jpg'},              
      ]
    
      const handlePrev = () => {
        setTransR(true)
        setTrans(false)
           const nextIndex = index - 1 ;
           const nextIndex1 = index1 - 1 ;
    
          if(nextIndex1 < 0){
            setIndex1(images.length - 1);
          } else  {
            setIndex1(nextIndex1)
          }
      
          if(nextIndex < 0){
            setIndex(images.length - 1);
          } else  {
            setIndex(nextIndex)
          }
        
    
      }
      const handleNext = () => {
        setTrans(true)
        setTransR(false)
      }
    
  
    
    
  var str1='<'  
  var str2='>'

  return (<>
      <Navbar className="text-[#edf3f7] py-1  group-hover:text-blue-400" content={navBarContent} />
      <div className="bg-[url('/backgrounIndex.jpg')] bg-cover  
       bg-no-repeat min-h-screen ">
      <div className='py-[100px]  '>
      <label className='text-white  font-extrabold ml-[45vh] 
        text-6xl'>Quickly register to be a part of our   </label>
      <label className='text-white  font-extrabold ml-[60vh] text-6xl '> MEDWHEELS community <br></br><br></br>
      </label>
      <label className=' font-bold text-gray-200 mx-[75vh] text-lg ml- '> Community striving to create a better world.  </label> 
      <label className='text-gray-400  font-bold ml-[60vh] text-lg '>  We welcome all the hospitals to engineer the beautiful world along with us.
      </label>
      </div>

      {images.length > 0 ?
      <>
      <div className="flex flex-row space-x-10  ">
        <button className='bg-transparent h-20 ml-2 w-20 mt-[100px] text-4xl  text-sky-400  '  onClick={handlePrev}> {str1} </button>
          <div className="relative -mt-6 bg-gray-200 w-[60vh] border-2 border-sky-400 h-[40vh] overflow-hidden rounded-xl">   
             <img  className={`absolute object-contain z-20 w-full h-full p-4  ${ trans ? 'transition duration-500 ease-linear transform -translate-x-full' : (transR ? 'animate-slideL' : "" )}`} src={images[index].name} alt=""  />
             <img className={`absolute object-contain z-0 w-full h-full  p-4 ${trans ? 'animate-slideR' : transR ? 'transition duration-500 ease-linear transform translate-x-full'  :  '' }`} src={images[index1].name} alt="" />
          </div>
         <button className='bg-transparent h-20 w-20 mt-[100px] text-4xl  text-sky-400   ' onClick={handleNext}> {str2} </button>

         <div className="   ml-2  ">
           <div className="text-4xl text-sky-400 font-bold   ml-2 font-poppins ">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(" So let's get started...Click below to register ♥")
                  .start()
                  .pauseFor(1000)
                  .deleteAll();
              }}
              options={{ loop: true }}
            />
          </div>
          <div><br></br></div>
          <Link href="/register">
              <a>
          <label className='text-white font-extrabold text-xl border-sky-600 rounded-xl border-2 px-2 py-1  bg-sky-400 h-10 w-40 ml-60  hover:bg-sky-900'  >Register</label>
          </a>
            </Link>
          </div>
     </div> 
      </>  
       : "no images yet"}
       
       </div>
      <div className="h-[30vh] bg-[url('/backgrounIndex.jpg')] bg-cover py-10" >
      
                <img
                  className="hover:scale-105 duration-200 py-5 ml-[90vh] "
                  color="#1da1f2"
                  src="/ambulance.svg"
                  alt="ambulance image"
                  height={60}
                  width={60}
                ></img>
                <label className="text-white px-3  font-extrabold text-4xl ml-[80vh] "> MedWheels</label></div>    
     
 
      </>
     
  )
}
