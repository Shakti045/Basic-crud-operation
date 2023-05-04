const mongoose=require('mongoose');
const Todoscheema=mongoose.Schema({
    title:{
        type:String,
        require:true,
        maxlength:50
    },
    description:{
        type:String,
        require:true,
        maxlength:100
    },
    createdat:{
        type:Date,
        require:true,
        default:Date.now()
    },
    updatedat:{
        type:Date,
        require:true,
        default:Date.now()
    }
})

module.exports=mongoose.model("TODO",Todoscheema);