import mongoose from "mongoose";
  const dbConnect = async ()=>{
    try{
        await mongoose.connect("mongodb+srv://iamsanyamchoudhary:LKTncXsWXnbePkz1@todoo.ohvzi.mongodb.net/?retryWrites=true&w=majority&appName=todoo",{
            useNewUrlParser: true,
            useUnifiedTopology: true}
            )
      
            console.log("Connected to MongoDB");       
    }
    catch(err){
        console.error("Error connecting to MongoDB", err);
      }; 
  }

  export default dbConnect;