const mongoose= require("mongoose");

const connectDataBase =()=>{
   mongoose.connect(process.env.DB_URI,(err)=>{
    if(err) console.log("Unable to connect with server :");
    else 
    console.log("MongoDB is connected");
   })
}
module.exports=connectDataBase;