import { InferenceClient } from "@huggingface/inference";
import Usermodel from "../models/auth-model.js";
import cloudinary from "../utils/cloudinary.js";
import imagekit from "../utils/imagekit.js";
const hf=new InferenceClient(process.env.HF_TOKEN);
const Imagecontroller=async(req,res)=>{
    const {imgprompt}=req.body;
    try {
        if(!imgprompt){
            return res.json({status:false,message:"Image prompt is required "});
        }
        const image=await hf.textToImage({
            model:"black-forest-labs/FLUX.1-schnell",
            provider:"nscale",
            inputs:imgprompt
        });
        console.log(image.type);
        const buffer=Buffer.from(await image.arrayBuffer());
        const base64image=buffer.toString("base64");
        const result=await imagekit.files.upload({
            file:base64image,
            fileName:`ai-image-${Date.now()}.jpg`,
            tags:["ai-genrated"]
        })
        console.log(result.url);
        // return res.json({status:true,message:"Image generated successfully",image:`data:${image.type||"image/png"};base64,${base64image}`})        FOR NOT UPLOADING IN A CLOUD PLATFORM 
        return res.json({status:true,message:"Image generated successfully",image:result.url,download:`data:${image.type||"image/png"};base64,${base64image}`})        
        
        
        
    } catch (error) {
        console.log("SERVER ERROR WHILE GENRATING",error.name,error.message,error.http_code,error.status);
        return res.json({status:false,message:"SERVER ERROR "})
        
        
    }

}
const Saveimageindb=async(req,res)=>{
    const {newimage}=req.body;
    try {
        if(!newimage){
            return res.json({status:false,message:"Image URL is required"});
        }
        const user=await Usermodel.findById(req.user.id);
        if(!user){
            return res.json({status:false,message:"User not found"});
        }
        user.history.push(newimage);
        await user.save();
        return res.json({status:true,message:"Image saved successfully"});
        
    } catch (error) {
        console.log("Save Image Error",error);
        return res.json({status:false,message:"Server Error While Storing In DB"});
        
    }
    

}
export{Imagecontroller,Saveimageindb}