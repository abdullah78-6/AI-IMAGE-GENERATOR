import express from "express"
import { Getprofile, GoogleLogin, Logout, Signin, Signup } from "../controller/auth-controller.js";
const Authrouter=express.Router();
Authrouter.post("/signup",Signup);
Authrouter.post("/signin",Signin);
Authrouter.get("/getprofile",Getprofile);
Authrouter.post("/googlelogin",GoogleLogin);
Authrouter.post("/logout",Logout);
export default Authrouter;