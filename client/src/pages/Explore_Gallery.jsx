import React, { useEffect } from 'react'
import { FaTrash,FaImages  } from "react-icons/fa";
import axios from "axios"
import {useSelector,useDispatch} from "react-redux"
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import { control } from '../redux/slice';
import {toast} from "react-hot-toast"
import { ClipLoader } from "react-spinners";
const Explore_Gallery = ({url}) => {
    const dispatch=useDispatch();
    const backendemail=useSelector(state=>state.main.backendemail);
    const history=useSelector(state=>state.main.history);
    const deleteloading=useSelector(state=>state.main.deleteloading);
    const mobilemenu=useSelector(state=>state.main.mobilemenu);
    const Fetch_history=async()=>{
      try {
        const res=await axios.get(url+"/api/img/get_history",{
          withCredentials:true,
        })
        if(res.data.status){
          dispatch(control.sethistory(res.data.history));
        }
        
        
      } catch (error) {
        console.log("get history error");
        
      }
      

    }
    useEffect(()=>{
        Fetch_history();
      },[])
      const Delete=async(id)=>{
        dispatch(control.setdeleteloading(true));
        try {
          dispatch(control.setdeleteloading(true));
          const res=await axios.delete(url+"/api/img/delete",{
            data:{_id:id},
           withCredentials:true

          })
          dispatch(control.setdeleteloading(true));
          if(res.data.status){
            toast.success(res.data.message);
            dispatch(control.setdeleteloading(false));
          }
          else{
            toast.error(res.data.message);
            dispatch(control.setdeleteloading(false));
          }
        } catch (error) {
          console.log("Delete history server error ",error);
          dispatch(control.setdeleteloading(false));
          
        }
      }
    return (
    <div className="min-h-screen w-full font-semibold  ">
      <Navbar url={url} />
      
      <div className={`max-w-6xl mx-auto px-4 ${mobilemenu?"mt-90":"mt-0"} sm:px-8 pt-12 pb-4`}>
        <p className="text-pink-700  text-2xl tracking-wide">Your creations</p>
        <h1 className=" text-4xl sm:text-5xl text-purple-700 mt-1">
          Generation history
        </h1>
        <p className="text-gray-800 mt-2 max-w-md">
          Every image you've generated, saved in one place. Delete anything you no longer need.
        </p>
      </div>

      {!backendemail ? (
        <div className="flex flex-col items-center justify-center text-center py-24 px-4">
          <FaImages className="text-4xl text-[#4A4155] mb-4" />
          <h2 className="text-2xl text-[#F5EFF2] ">Sign in to see your history</h2>
          <p className="text-gray-700 mt-2 max-w-sm">
            Log in to view and manage the images you've generated.
          </p>
        </div>
      ) : (
        <div className="max-w-6xl mx-auto px-4 sm:px-8 pb-16">

          {deleteloading && (
            <div className="flex items-center gap-3 text-[#A79BB0] mb-4 text-sm">
              <ClipLoader size={18} color="#D66FA0" />
              Removing image…
            </div>
          )}

          {history.length === 0 ? (
            <div className="text-center py-20 border border-dashed border-[#332C3D] rounded-xl">
              <p className="text-[#A79BB0]">Nothing here yet — go generate something.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {history.map((item) => (
                <div
                  key={item._id}
                  className="group bg-[#1E1926] border border-[#2C2434] rounded-xl overflow-hidden hover:border-[#4A3A54] transition-colors duration-300 capitalize"
                >
                  <div className="relative overflow-hidden aspect-square">
                    <img
                      src={item.image_address}
                      alt={item.text_prompt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <button
                      onClick={() => Delete(item._id)}
                      aria-label="Delete image"
                      className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/50 backdrop-blur text-[#F5EFF2] flex items-center justify-center opacity-100 group-hover:opacity-100 hover:bg-[#B23A63] transition-all duration-200"
                    >
                      
                      <FaTrash size={13} />
                    </button>
                  </div>

                  <div className="p-4">
                    
                    <p className="text-[#F5EFF2] text-sm leading-snug line-clamp-2  capitalize text-xl">
                      {item.text_prompt}
                    </p>
                    <p className="text-[#6E6478] text-sm mt-2 uppercase tracking-wide">
                      {item.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      <Footer />
    </div>
  )
}

export default Explore_Gallery
