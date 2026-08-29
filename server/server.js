import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import "dotenv/config"
import Connectdb from "./utils/db.js";
import Authrouter from "./routes/auth-route.js";
const app=express();
 
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

app.use(express.json());
app.use(cookieParser());
Connectdb();
app.get("/",(req,res)=>{
    res.json({status:true,message:"THE SERVER IS READY FOR WORKING "})
})
app.use("/api/auth/",Authrouter);
const port=process.env.PORT;
app.listen(port,()=>{
   
    console.log("server is listining ",port);
})
