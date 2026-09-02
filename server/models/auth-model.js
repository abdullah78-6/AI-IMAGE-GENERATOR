import mongoose from "mongoose"
const Historyschema=new mongoose.Schema({
    image_address:{type:String,required:true},
    text_prompt:{type:String,required:true},
    date:{type:String,required:true}
});
const Authschema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    history:{type:[Historyschema],default:[]}
},{minimize:false})
const Usermodel=mongoose.model.Auth||mongoose.model("AUTH-MODEL",Authschema);
export default Usermodel;