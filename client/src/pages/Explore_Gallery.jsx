import React, { useEffect } from 'react'
import axios from "axios"
import {useSelector,useDispatch} from "react-redux"
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import { control } from '../redux/slice';
import {toast} from "react-hot-toast"
const Explore_Gallery = ({url}) => {
    const dispatch=useDispatch();
    const backendemail=useSelector(state=>state.main.backendemail);
    const history=useSelector(state=>state.main.history);
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
        toast.success(id);
      }
     return (
    <div>
      <Navbar url={url}/>
      {!backendemail?<h1>User login required</h1>:
      <div>
        {history.map((i)=>(
          <div>
            <img src={i.image_address}  className='w-20'/>
            <h1>{i.text_prompt}</h1>
            <h1>{i.date}</h1>
            <div>
              <div>
                <button onClick={()=>Delete(i._id)}>Delete</button>
              </div>
            </div>
          </div>

        ))}
      </div>
      }
      <Footer/>
      
    </div>
  )
}

export default Explore_Gallery
