import React, { useEffect } from 'react'
import axios from "axios"
import {toast} from "react-hot-toast"
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider , signInWithPopup } from "firebase/auth";
import  {auth}  from '../../firebase.js'
import { control } from '../redux/slice.js'
import { useDispatch,useSelector } from 'react-redux';
const Signup = ({url}) => {
    const dispatch=useDispatch();
    const Authdata=useSelector(state=>state.main.Logindata);
    const type=useSelector(state=>state.main.type);
    const backendemail=useSelector(state=>state.main.backendemail);
    const Onchangehandler=(e)=>{
      dispatch(control.setLogindata({
        name:e.target.name,
        value:e.target.value
      }))

    }
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
    
    const Submit=async(e)=>{
      e.preventDefault();
      let newurl=url;
      if(type==="login"){
        newurl=newurl+"/api/auth/signin"
      }
      else{
        newurl=newurl+"/api/auth/signup"
      }
      try {
         const response=await axios.post(newurl,Authdata,{
            withCredentials:true
        });

    if(response.data.status){
       
          if(type==="login"){
          const res=await axios.get(url+"/api/auth/getprofile",{
            withCredentials:true,
        })
        if(res.data.status){
            dispatch(control.setbackendemail(res.data.email));
       }
        else{
            dispatch(control.setbackendemail(""));
        
        }
       
       
          }
        
       
        
        toast.success(response.data.message);
    }
    else{
      toast.error(response.data.message);
    }
      } catch (error) {
        console.log("backend server error while authentication ",error)
        
      }
   

    }
    const GoogleLogin=async(e)=>{
      e.preventDefault();
      const provider=new GoogleAuthProvider();
      const result=await signInWithPopup(auth,provider);
      try {
        const res=await axios.post(url+"/api/auth/googlelogin",
          {
            email:result.user.email,
            
          
          },
          
          {
            withCredentials:true
          }

        );
        if(res.data.status){
          toast.success(res.data.message);
          Fetch();
          dispatch(control.setbackendemail(res.data.email));
        }
        else{
        toast.error(res.data.message);
        }
        
      } catch (error) {
        console.log("goolge login server error",error);
        
      }

    }

return (
  <div className="relative min-h-screen w-full overflow-hidden bg-slate-950 px-4 py-8 sm:px-6 lg:px-8">
    <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
    <div className="absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />
    <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-3xl" />

    <div className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center">
      <div className="mb-8 text-center">
        <h1 className="cursor-pointer text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
          AI
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            -IMAGE GENERATOR
          </span>
        </h1>

        <p className="mt-3 text-sm text-slate-400 sm:text-base">
          Bring your imagination to life with AI
        </p>
      </div>

      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/10 p-5 shadow-2xl shadow-black/40 backdrop-blur-2xl sm:p-8">
        <div className="mb-7 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-600 shadow-lg shadow-blue-500/30">
            <span className="text-2xl">✨</span>
          </div>

          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            {type === "Sign up" ? "Create Account" : "Welcome Back"}
          </h2>

          <p className="mt-2 text-sm text-slate-400">
            {type === "Sign up"
              ? "Create your account and start generating"
              : "Sign in to continue creating amazing images"}
          </p>
        </div>

        {backendemail && (
          <div className="mb-5 rounded-xl border border-red-400/20 bg-red-500/10 px-4 py-3 text-center text-sm text-red-300">
            {backendemail}
          </div>
        )}

        <form onSubmit={Submit} className="flex flex-col gap-5">
          {type === "Sign up" && (
            <div className="flex flex-col gap-2">
              <label
                className="text-sm font-semibold text-slate-200"
                htmlFor="name"
              >
                Full Name
              </label>

              <input
                autoComplete="none"
                onChange={Onchangehandler}
                name="name"
                value={Authdata.name}
                type="text"
                placeholder="Enter your full name"
                required
                id="name"
                className="w-full rounded-xl border border-white/10 bg-slate-900/50 px-4 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-slate-500 hover:border-white/25 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/10"
              />
            </div>
          )}

          <div className="flex flex-col gap-2">
            <label
              className="text-sm font-semibold text-slate-200"
              htmlFor="email"
            >
              Email Address
            </label>

            <input
              autoComplete="none"
              onChange={Onchangehandler}
              name="email"
              value={Authdata.email}
              type="email"
              placeholder="Enter your email"
              required
              id="email"
              className="w-full rounded-xl border border-white/10 bg-slate-900/50 px-4 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-slate-500 hover:border-white/25 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/10"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              className="text-sm font-semibold text-slate-200"
              htmlFor="password"
            >
              Password
            </label>

            <input
              autoComplete="none"
              onChange={Onchangehandler}
              name="password"
              value={Authdata.password}
              type="password"
              placeholder="Enter your password"
              required
              id="password"
              className="w-full rounded-xl border border-white/10 bg-slate-900/50 px-4 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-slate-500 hover:border-white/25 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/10"
            />
          </div>

          <button
            type="submit"
            className="mt-2 w-full rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-600/30 hover:brightness-110 active:scale-[0.98]"
          >
            {type === "Sign up" ? "Create Account" : "Sign In"}
          </button>

          {type === "login" && (
            <>
              <div className="flex items-center gap-3 py-1">
                <div className="h-px flex-1 bg-white/10" />
                <span className="text-xs font-medium text-slate-500">
                  OR
                </span>
                <div className="h-px flex-1 bg-white/10" />
              </div>

              <button
                className="flex w-full items-center justify-center gap-3 rounded-xl border border-white/10 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-100 hover:shadow-xl active:scale-[0.98]"
                type="button"
                onClick={GoogleLogin}
              >
                <span className="text-xl">
                  <FcGoogle />
                </span>
                Continue with Google
              </button>
            </>
          )}

          <div className="pt-2 text-center">
            {type === "Sign up" ? (
              <p className="text-sm text-slate-400">
                Already have an account?{" "}
                <button
                  className="font-semibold text-cyan-400 transition-colors hover:text-cyan-300"
                  type="button"
                  onClick={() => dispatch(control.settype("login"))}
                >
                  Sign in
                </button>
              </p>
            ) : (
              <p className="text-sm text-slate-400">
                Don't have an account?{" "}
                <button
                  className="font-semibold text-cyan-400 transition-colors hover:text-cyan-300"
                  onClick={() => dispatch(control.settype("Sign up"))}
                  type="button"
                >
                  Create account
                </button>
              </p>
            )}
          </div>
        </form>
      </div>

      <p className="mt-6 text-xs text-slate-600">
        Generate • Create • Imagine
      </p>
    </div>
  </div>
)
}

export default Signup
