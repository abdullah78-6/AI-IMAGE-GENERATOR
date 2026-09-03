import express from "express"
import { Deletehistory, Gethistory, Imagecontroller, Saveimageindb } from "../controller/Image-controller.js";
import Authmiddleware from "../middleware/auth-middleware.js";
const Imagerouter=express.Router();
Imagerouter.post("/get_image",Imagecontroller);
Imagerouter.post("/save_image",Authmiddleware,Saveimageindb);
Imagerouter.get("/get_history",Authmiddleware,Gethistory);
Imagerouter.delete("/delete",Authmiddleware,Deletehistory);
export default Imagerouter;