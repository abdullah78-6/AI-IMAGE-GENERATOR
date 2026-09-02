import React, { useEffect } from 'react'
import Footer from '../components/footer';
import axios from "axios"
import {useDispatch,useSelector} from "react-redux"
import Navbar from '../components/Navbar';
import { control } from '../redux/slice';
import Hero from './Hero';
const Home = ({url})=> {
const dispatch=useDispatch();
const profile=useSelector(state=>state.main.backendemail);
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

  return (
    <div>
      <Navbar url={url}/>
      <Hero url={url}/>
      
        <Footer/>
      
    </div>
  )
}

export default Home;
