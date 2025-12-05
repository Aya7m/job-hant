import mongoose from "mongoose";

export const dbConnect=async(req,res)=>{
    try {
        
      const conected=await  mongoose.connect(process.env.MONGO_URL)
      if(conected){
        console.log('database connected successfully ...');
        
      }else{
        console.log('error in database');
        
      }
    } catch (error) {
        console.log(error);
        
        
    }
}