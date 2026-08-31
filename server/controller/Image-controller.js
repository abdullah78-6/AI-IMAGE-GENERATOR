import { InferenceClient } from "@huggingface/inference";
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
        const buffer=Buffer.from(await image.arrayBuffer());
        const base64image=buffer.toString("base64");
        console.log(base64image.length);
        return res.json({status:true,message:"Image generated successfully",image:`data:${image.type||"image/png"};base64,${base64image}`})        
        
    } catch (error) {
        console.log("SERVER ERROR WHILE GENRATING",error);
        return res.json({status:false,message:"SERVER ERROR "})
        
        
    }

}
const Saveimageindb=async(req,res)=>{
    try {
        
    } catch (error) {
        
    }

}
export{Imagecontroller,Saveimageindb}