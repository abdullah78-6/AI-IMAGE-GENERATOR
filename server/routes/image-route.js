import express from "express"
import { Imagecontroller, Saveimageindb } from "../controller/Image-controller.js";
import upload from "../middleware/multer-middleware.js";
const Imagerouter=express.Router();
Imagerouter.post("/get_image",Imagecontroller);
Imagerouter.post("/save_image",upload.single("image"),Saveimageindb);
export default Imagerouter;