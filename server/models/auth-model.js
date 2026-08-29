import mongoose from "mongoose"
const Authschema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    history:{type:Array}
},{minimize:false})
const Usermodel=mongoose.model.Auth||mongoose.model("AUTH-MODEL",Authschema);
export default Usermodel;