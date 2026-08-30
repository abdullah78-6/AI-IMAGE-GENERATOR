import React, { useEffect } from 'react'
import {useDispatch,useSelector} from "react-redux"
import axios from 'axios'
import {toast} from "react-hot-toast"
import { control } from '../redux/slice'
const Navbar = ({url}) => {
const dispatch=useDispatch();
const profile=useSelector(state=>state.main.backendemail)
const navclass=useSelector(state=>state.main.navclass);
const Fetch=async()=>{
      try {
        const res=await axios.get(url+"/api/auth/getprofile",{
          
          withCredentials:true
        });
        if(res.data.status){
          dispatch(control.setbackendemail(res.data.email));
          
        }

      } catch (error) {
        console.log("fetch profile server",error);
        
      }
      
    }
    useEffect(()=>{
      Fetch();

    },[])
    
        const Logout=async(e)=>{
        e.preventDefault();
          const response=await axios.post(url+"/api/auth/logout",{},{
            withCredentials:true
        });
        if(response.data.status){
            dispatch(control.setbackendemail(""));
            
        toast.success(response.data.message);

        }
        else{
            toast.error(response.data.message);
        }

    }
return (
    <div className='font-semibold  flex justify-between items-center p-2 text-gray-900  bg-gradient-to-r from-[#AD62AA]/40 to-[#092328]/20  '>
      
        <div>
            <h1 onClick={()=>dispatch(control.setnavclass(""))} className='text-3xl cursor-pointer text-white capitalize'>AI<span className='text-purple-700 capitalize'>-Vision</span></h1>
        </div>
        <ul className='flex justify-between items-center gap-15 text-xl text-white'>
            <li onClick={()=>dispatch(control.setnavclass("Home"))} className={`cursor-pointer ${navclass==="Home"?" inset-0 transition ease-in-out duration-300 p-2  rounded-full bg-gradient-to-r from-[#AD62AA]/40 to-[#D91656]/40 border border-[#EF88AD]/40":""}`}>Home</li>
            <li onClick={()=>dispatch(control.setnavclass("generate"))} className={`cursor-pointer ${navclass==="generate"?" inset-0 transition ease-in-out duration-300 p-2 rounded-full bg-gradient-to-r from-[#AD62AA]/40 to-[#D91656]/40 border border-[#EF88AD]/40":""}`} >Generate</li>
            <li onClick={()=>dispatch(control.setnavclass("explore"))} className={`cursor-pointer ${navclass==="explore"?" inset-0 transition ease-in-out duration-300 p-2 rounded-full bg-gradient-to-r from-[#AD62AA]/40 to-[#D91656]/40 border border-[#EF88AD]/40":""}`}>Explore</li>
            <li onClick={()=>dispatch(control.setnavclass("pricing"))} className={`cursor-pointer ${navclass==="pricing"?" inset-0 transition ease-in-out duration-300 p-2 rounded-full bg-gradient-to-r from-[#AD62AA]/40 to-[#D91656]/40 border border-[#EF88AD]/40":""}`}>Pricing</li>
              <div className='flex justify-center items-center gap-6'>
            <div>
              {profile? <button className='bg-red-800 hover:bg-red-900 transition ease-in-out duration-200 p-2 text-xl rounded-lg text-white' title="Logout" onClick={Logout}>Logout</button>:<button className='bg-cyan-700 hover:bg-cyan-900 transition ease-in-out duration-200 p-2 text-xl rounded-lg text-white' title="Login">Login</button>}
            </div>
            <div>
                <h1 title='profile' className='uppercase bg-cyan-900/20 hover:bg-blue-500/20 transition ease-in-out duration-200 cursor-pointer text-gray-300  p-2  rounded-full w-12 h-12 text-center'>{profile.slice(0,1)}</h1>
            </div>
        </div>
        </ul>
      
      
    </div>
  )
}

export default Navbar
