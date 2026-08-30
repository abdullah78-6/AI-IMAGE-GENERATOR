import Home from "./pages/home"
import Signup from "./pages/Signup"
const backendurl="http://localhost:9000"
import { useDispatch,useSelector } from "react-redux"
import axios from "axios"
import { Route, Routes,Navigate } from "react-router-dom"
import { useEffect } from "react"
import { control } from "./redux/slice"
function App() {
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
    const dispatch=useDispatch();
    const profile=useSelector(state=>state.main.backendemail);
return <div>
    <Routes>
 <Route path="/login" element={!profile?<Signup url={backendurl}/>:<Navigate to="/"/>}></Route>
 <Route path="/" element={profile?<Home url={backendurl}/>:<Navigate to="/login"/>}/>
    </Routes>
</div>
}
export default App
