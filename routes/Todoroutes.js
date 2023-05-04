const createtodo=require('../controlers/Todocreate');
const getalltodo=require('../controlers/Getalltodo')
const gettododbyid=require('../controlers/gettodobyid')
const {updatetodo}=require('../controlers/updatetodo')
const {deletetodo}=require('../controlers/deletetodo')
const express=require('express')
const router=express.Router();
router.post("/createtodo",createtodo)
router.get("/getalltodo",getalltodo)
router.get("/gettodobyid/:id",gettododbyid);
router.put("/updatetodod/:id",updatetodo)
router.delete("/deletetodo/:id",deletetodo)
module.exports=router;