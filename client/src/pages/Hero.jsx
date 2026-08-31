import React from 'react'
import axios from "axios"
import {toast} from "react-hot-toast"
import {useDispatch,useSelector} from "react-redux"
import { control } from '../redux/slice';
const Hero = ({url}) => {
  const dispatch=useDispatch();
  const serverimg=useSelector(state=>state.main.serverimg);
  const imgprompt=useSelector(state=>state.main.imgprompt);
const Genrateaiimage=async(e)=>{
  e.preventDefault();
try {
const res=await axios.post(url+"/api/img/get_image",{imgprompt},
  {
    withCredentials:true
  },
)
if(res.data.status){
  toast.success(res.data.message);
  dispatch(control.setserverimg(res.data.image))
  
}
else{
  toast.error(res.data.message);
}
    
  } catch (error) {
    console.log("image genration error on server",error)
    
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
                        <button className='bg-teal-500 p-2 rounded-lg hover:bg-teal-600 transition ease-in-out duration-200 ' title='Explore Gallery' type="button">Explore Gallery</button>
                    </div>
                </div>

            </form>
            {serverimg&&<div>
              <div>
              <img className='w-90 h-90' src={serverimg} alt="AI-GENRATED-IMAGE"/>
              </div>
              <div>
                <button>SAVE IMAGE</button>
              </div>

            </div>
            }
        </div>
      </div>
    </div>
  )
}

export default Hero
