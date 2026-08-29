import mongoose from "mongoose"
const Connectdb=async()=>{
    try {
    const connection= await mongoose.connect(process.env.MONGODB_URI);
    if(connection){
     console.log("DB CONNECTED ");
    }
    else{
        console.log("problem in connection ")
    }
    } catch (error) {
        console.log("DB CONNECTION ERROR",error);
        
    }
}
export default Connectdb;