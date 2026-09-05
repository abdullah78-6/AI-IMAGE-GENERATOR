import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import "dotenv/config"
import Connectdb from "./utils/db.js";
import Authrouter from "./routes/auth-route.js";
import Imagerouter from "./routes/image-route.js";
const app=express();
 
app.use(cors({
    origin:"https://ai-vision-t0ei.onrender.com",
    credentials:true
}))

app.use(express.json());
app.use(cookieParser());
Connectdb();
app.get("/",(req,res)=>{
    res.json({status:true,message:"THE SERVER IS READY FOR WORKING "})
})
app.use("/api/auth/",Authrouter);
app.use("/api/img/",Imagerouter);
const port=process.env.PORT;
app.listen(port,()=>{
   
    console.log("server is listining ",port);
})
