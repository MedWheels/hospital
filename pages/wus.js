import react from "react";
import Navbar from "../components/Navbar";
import { Editor } from "@tinymce/tinymce-react";
import dynamic from 'next/dynamic'
import 'react-quill/dist/quill.snow.css'

const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
})

const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'image', 'video'],
    ['clean'],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
}

const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video',
]


export default function wus()
{
  // const editorRef = useRef(null);

    return(
    <> 

    <div className="  text-white">increasing margin</div>
    <div className="bg-white min-h-screen w-full">

 
    <div className="justify-items-stretch pl-40 pt-20  ">
          <div className="relative w-full max-w-lg  py-49">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          </div>
        </div>
  
   

    

   <div className="flex flex-row space-x-10  ">
    <div className="border-2 border-black ">
    <div className='text-center text-6xl font-poppins font-extrabold text-orange-600 '>  About us <br/> </div>
    </div>
     <div className="border-2 border-black">
    <div className='  text-6xl font-poppins font-extrabold ml-[140px] text-orange-600'>  Got a Question? </div>
    <div className='  text-2xl font-poppins font-extrabold text-gray-600 ml-[140px] pt-20'>  Chat with us - Feel free to write us your question. <br></br> The only things we require to reach you is your name and email.  </div>
    {/* </div>  */}
    <input className="px-2 mb-2 p-1 mt-10   
    text-center font-poppins font-extrabold placeholder placeholder-gray-400 text-2xl  ring-2 
    ring-gray-200 rounded-sm  w-[745px] h-[60px]  
     bg-white text-black"  placeholder={"Your Name"}></input>

    <input className="px-2 mb-2 p-1 mt-10  font-poppins font-extrabold text-gray-
    text-center placeholder placeholder-gray-400 text-2xl  ring-2 
    ring-gray-200 rounded-sm  w-[745px] h-[60px]  
     bg-white text-black"  placeholder={"Your email - test@gmail.com"}></input>

     

            
    <QuillNoSSRWrapper className=" mb-2 p-1 mt-10 w-[745px] h-[250px]   " modules={modules} formats={formats} theme="snow" />
    </div>
    <div className="justify-items-right  mt-40 pl-[100vh]">
          <div className="relative w-full max-w-lg  py-49">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          </div>
        </div>
       
        
        </div>
       </div>
        </>)
    
}