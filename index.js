const express=require('express');
const App=express();
const connecttodb=require('./config/database');
const router=require('./routes/Todoroutes')
require('dotenv').config();
const PORT=process.env.PORT || 5000;
App.use(express.json());
App.use("/api/v1",router);
App.listen(PORT,()=>{
    console.log(`Server started successfully on port ${PORT}`);
})
App.get("/",(req,res)=>{
    res.send("Server start hogeya he")
})
connecttodb();