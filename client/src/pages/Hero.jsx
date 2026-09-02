import React from 'react'
import { FaSave } from "react-icons/fa";
import { IoIosCloudDownload } from "react-icons/io";
import axios from "axios"
import {toast} from "react-hot-toast"
import {useDispatch,useSelector} from "react-redux"
import { control } from '../redux/slice';
import { Link } from 'react-router-dom';
import { ClipLoader } from "react-spinners";
const Hero = ({url}) => {
  const dispatch=useDispatch();
  const serverimg=useSelector(state=>state.main.serverimg);
  const imgprompt=useSelector(state=>state.main.imgprompt);
  const backendemail=useSelector(state=>state.main.backendemail);
  const download2=useSelector(state=>state.main.download2);
  const loading=useSelector(state=>state.main.loading);
  const Genrateaiimage=async(e)=>{
  e.preventDefault();
  dispatch(control.setloading(true));
try {
const res=await axios.post(url+"/api/img/get_image",{imgprompt},
  {
    withCredentials:true
  },
)
dispatch(control.setloading(true));
if(res.data.status){
  toast.success(res.data.message);
  dispatch(control.setserverimg(res.data.image))
  dispatch(control.setdownload2(res.data.download))
  dispatch(control.setloading(false));
  
}
else{
  toast.error(res.data.message);
  dispatch(control.setloading(false));
}
    
  } catch (error) {
    console.log("image genration error on server",error)
    dispatch(control.setloading(false));
    
  }
}
const DownloadIMage=async()=>{
  if(!backendemail){
    toast.error("User Login Required");
    return ;
  }
  if(!download2){
    toast.error("Genrate Image First");
    return ;
  }
  const link=document.createElement("a");
  link.href=download2;
  link.download="AI-GENRATED-IMG.png";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
const SaveinDb=async()=>{
  if(!backendemail){
    toast.error("User Login Required");
    return ;
  }
  if(!serverimg){
    toast.error("Genrate Image First");
    return ;
  }
  
  try {
    const res=await axios.post(url+"/api/img/save_image",{newimage:serverimg,prompt:imgprompt},{
      withCredentials:true
    })
    if(res.data.status){
      toast.success(res.data.message);
    }
    else{
      toast.error(res.data.message);
    }
    
  } catch (error) {
    console.log("Save image Server Error",error);
    
  }

}
  return (
    <div className='font-semibold capitalize mt-5 p-7 '>

      <div className='flex justify-center items-center flex-col gap-7 text-center'>
        <div>
<h1 className=' bg-cyan-100/40 w-full rounded-full p-0.5 text-sm text-indigo-700'>
  ✨ AI-Powered Image Generation
</h1>

<p className='text-4xl mt-2 text-indigo-700  '>
  Turn Your Imagination Into Stunning Images
</p>

        </div>
        <div>
            <p className='w-190 text-xl text-slate-600 '>create unique, high-quality images in seconds with the power of AI. Just describe your idea, and let our AI bring it to life.</p>
        </div>
        <div className='mb-3'>
            <form onSubmit={Genrateaiimage}>
                <div>
                  
                <input onChange={(e)=>dispatch(control.setimgprompt(e.target.value))}  className="px-3 py-2.5 text-sm text-slate-800 w-full rounded-lg bg-neutral-300 border border-neutral-700 outline-none placeholder:text-slate-800 focus:border-[#D91656] focus:ring-2 focus:ring-[#D91656]/30 transition-colors" type="text"placeholder='Enter-Image-Prompt' required/>
                </div>
                <div className='flex justify-between items-center gap-15 mt-3'>
                    <div>
                        <button className='bg-green-400 p-2 rounded-lg hover:bg-green-600 transition ease-in-out duration-200 ' title='Generate Image' type='submit'>Generate Image</button>
                    </div>
                    <div>
                        <Link to="/history" target='blank'    className='bg-teal-500 p-2 rounded-lg hover:bg-teal-600 transition ease-in-out duration-200 ' title='Explore Gallery' type="button">Explore Gallery</Link>
                    </div>
                </div>

            </form>
            
            {download2&&<div className='flex justify-start p-2 '>
            <div>
                <button className='text-cyan-800 flex justify-center items-center gap-5  bg-gray-400 p-3 text-xl rounded-lg hover:bg-gray-600 hover:text-purple-300 transition ease-in-out duration-200' onClick={DownloadIMage}><span><IoIosCloudDownload className='text-2xl'/></span>Download</button>
              </div>
              </div>}
             {loading&& <div><ClipLoader
                   size={40}
                    color="#090040" 
                                  
                   />
              </div>}
            {serverimg&&<div>
              
              <div>
              <img className='w-90 h-90' src={serverimg} alt="AI-GENRATED-IMAGE"/>
              </div>
              <div className='flex justify-center items-center gap-6 mt-5 text-3xl'>
              <div>
                <button onClick={SaveinDb} className='text-emerald-800 bg-gray-400 p-4 rounded-lg hover:bg-gray-600 transition ease-in-out duration-200 hover:text-purple-300'><FaSave/></button>
              </div>
              
              </div>

            </div>
            }
        </div>
          
      </div>
    </div>
  )
}

export default Hero
