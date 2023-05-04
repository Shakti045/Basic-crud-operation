const mongoose=require('mongoose')
require('dotenv').config();
function connecttodb(){
    mongoose.connect(process.env.DB_URL).then(()=>{console.log("Database connection successsfull")}).catch((err)=>{console.error("database conection unsuccesssfull",err)})
}
module.exports=connecttodb;