import Home from "./pages/home"
import Signup from "./pages/Signup"
import { useDispatch,useSelector } from "react-redux"
import axios from "axios"
import { Route, Routes,Navigate } from "react-router-dom"
import { useEffect } from "react"
import { control } from "./redux/slice"
import Explore_Gallery from "./pages/Explore_Gallery"
function App() {
const backendurl="http://localhost:9000"
    const Fetch=async()=>{
      try {
        const res=await axios.get(backendurl+"/api/auth/getprofile",{
          
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
    const dispatch=useDispatch();
    const profile=useSelector(state=>state.main.backendemail);
return <div>
    <Routes>
 <Route path="/login" element={!profile?<Signup url={backendurl}/>:<Navigate to="/"/>}></Route>
 <Route path="/" element={profile?<Home url={backendurl}/>:<Navigate to="/login"/>}/>
 <Route path="/history" element={<Explore_Gallery url={backendurl}/>}/>
    </Routes>
</div>
}
export default App
