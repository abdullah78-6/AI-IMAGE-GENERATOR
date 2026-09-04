import React, { useEffect } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import {useDispatch,useSelector} from "react-redux"
import axios from 'axios'
import {toast} from "react-hot-toast"
import { control } from '../redux/slice'
import {Link,useNavigate} from "react-router-dom"
const Navbar = ({url}) => {
const dispatch=useDispatch();
const profile=useSelector(state=>state.main.backendemail)
const navclass=useSelector(state=>state.main.navclass);
const navigate=useNavigate();
const mobilemenu=useSelector(state=>state.main.mobilemenu);
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
            dispatch(control.setserverimg(""));
            dispatch(control.setdownload2(""))
            dispatch(control.setfileid(""));
            dispatch(control.setimgprompt(""));
            
        toast.success(response.data.message);

        }
        else{
            toast.error(response.data.message);
        }

    }
return (
    <div >
      <div className='font-semibold  flex justify-between items-center p-2 text-gray-900  bg-gradient-to-r from-[#AD62AA]/40 to-[#092328]/20 '>
        <div>
            <Link to="/" onClick={()=>dispatch(control.setnavclass(""))} className='text-3xl cursor-pointer text-white capitalize'>AI<span className='text-purple-700 capitalize'>-Vision</span></Link>
        </div>
        <ul className='hidden  md:flex justify-between items-center gap-15 text-xl text-white        xl:flex justify-between items-center gap-15 text-xl text-white     lg:flex justify-between items-center gap-15 text-xl text-white'>
            <a href="#Details" onClick={()=>dispatch(control.setnavclass("Home"))} className={`cursor-pointer ${navclass==="Home"?" inset-0 transition ease-in-out duration-300 p-2  rounded-full bg-gradient-to-r from-[#AD62AA]/40 to-[#D91656]/40 border border-[#EF88AD]/40":""}`}>Details</a>
            <Link to="/history" target="_blank" onClick={()=>dispatch(control.setnavclass("History"))} className={`cursor-pointer ${navclass==="History"?" inset-0 transition ease-in-out duration-300 p-2 rounded-full bg-gradient-to-r from-[#AD62AA]/40 to-[#D91656]/40 border border-[#EF88AD]/40":""}`}>History</Link>
            <a href="#pricing" onClick={()=>dispatch(control.setnavclass("pricing"))} className={`cursor-pointer ${navclass==="pricing"?" inset-0 transition ease-in-out duration-300 p-2 rounded-full bg-gradient-to-r from-[#AD62AA]/40 to-[#D91656]/40 border border-[#EF88AD]/40":""}`}>Pricing</a>
              <div className='flex justify-center items-center gap-6'>
            <div>
              {profile? <button className='bg-red-800 hover:bg-red-900 transition ease-in-out duration-200 p-2 text-xl rounded-lg text-white' title="Logout" onClick={Logout}>Logout</button>:<button className='bg-cyan-700 hover:bg-cyan-900 transition ease-in-out duration-200 p-2 text-xl rounded-lg text-white' title="Login" onClick={()=>navigate("/login")}>Login</button>}
            </div>
            <div>
                <h1 title='profile' className='uppercase bg-cyan-900/20 hover:bg-blue-500/20 transition ease-in-out duration-200 cursor-pointer text-gray-300  p-2  rounded-full w-12 h-12 text-center'>{profile.slice(0,1)}</h1>
            </div>
            
            
        </div>
        </ul>
   <div className='md:hidden lg:hidden xl:hidden block text-3xl'>
    {!mobilemenu?<motion.button
          key="hamburger"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            whileTap={{ scale: 0.85 }}
            transition={{ duration: 0.3 }}
       
    className='text-[#4d385f]' onClick={()=>dispatch(control.setmobilemenu(true))}><GiHamburgerMenu/></motion.button>:<motion.button 
            key="cross"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            whileTap={{ scale: 0.85 }}
            transition={{ duration: 0.3 }}
    onClick={()=>dispatch(control.setmobilemenu(false))} className='text-[#D91656]'><RxCross2/></motion.button>}
          </div>
 </div>
      
  {mobilemenu&&
  <div className='md:hidden xl:hidden lg:hidden relative' >
    <AnimatePresence>
    <motion.ul
    key="mobile-menu"
    initial={{ opacity: 0, y: -16, scale: 0.97 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: -16, scale: 0.97 }}
    transition={{ duration: 0.25, ease: "easeOut" }}
    className='bg-[#141a24]/40  backdrop-blur-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)]
              overflow-hidden
              flex justify-center items-center flex-col  gap-4 text-2xl
              p-4 rounded-lg text-purple-900  font-semibold
              absolute left-4 right-4 top-[calc(100%+0.75rem)]
              '
              
    >
      <motion.a
      initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                href="#Details"
        transition={{ delay: 0.04 , duration: 0.2 }}
       onClick={()=>dispatch(control.setnavclass("Home"),dispatch(control.setmobilemenu(false)))} className={`cursor-pointer ${navclass==="Home"?" inset-0 transition ease-in-out duration-300 p-2  rounded-full bg-gradient-to-r from-[#AD62AA]/40 to-[#D91656]/40 border border-[#EF88AD]/40":""}`}>Details</motion.a>
      <motion.a
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.04 , duration: 0.2 }}
      href="/history" target="_blank" onClick={()=>dispatch(control.setnavclass("History"),dispatch(control.setmobilemenu(false)))} className={`cursor-pointer ${navclass==="History"?" inset-0 transition ease-in-out duration-300 p-2 rounded-full bg-gradient-to-r from-[#AD62AA]/40 to-[#D91656]/40 border border-[#EF88AD]/40":""}`}>History</motion.a>
      <motion.a
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.04 , duration: 0.2 }}
      href="#pricing"
                 
       onClick={()=>dispatch(control.setnavclass("pricing"),dispatch(control.setmobilemenu(false)))} className={`cursor-pointer  ${navclass==="pricing"?" inset-0 transition ease-in-out duration-300 p-2 rounded-full bg-gradient-to-r from-[#AD62AA]/40 to-[#D91656]/40 border border-[#EF88AD]/40":""}`}>Pricing</motion.a>
          <div className='flex justify-center items-center gap-6 flex-wrap flex-col mt-3 p-2'>
            <div className='mb-4'>
            {profile? <button className='bg-red-800 hover:bg-red-900 transition ease-in-out duration-200 p-2 text-xl rounded-lg text-white' title="Logout" onClick={Logout}>Logout</button>:<button className='bg-cyan-700 hover:bg-cyan-900 transition ease-in-out duration-200 p-2 text-xl rounded-lg text-white' title="Login" onClick={()=>navigate("/login")}>Login</button>}
          </div>
          <div className='mt-0'>
          <h1 title='profile' className='uppercase bg-cyan-900/20 hover:bg-blue-500/20 transition ease-in-out duration-200 cursor-pointer text-gray-300  p-2  rounded-full w-12 h-12 text-center'>{profile.slice(0,1)}</h1>
        </div>
      </div>
    </motion.ul>
    </AnimatePresence>
    </div>
  }
  </div>
  )
}

export default Navbar
