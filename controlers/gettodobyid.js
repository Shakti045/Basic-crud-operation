const TODO=require('../modals/todoscheema');
async function gettodobyid(req,res){
    try{
        const ID=req.params.id;
        let todo=await TODO.findById({_id:ID})
        if(!todo){
            return res.status(404).json({
                "success":false,
                "mssage":"not found data"
            })
        }
        res.status(200).json({
            "success":true,
            "message":"data found",
            "todo":todo
        })
    }catch(err){
    res.status(500).json({
        "message":err.message
    })
    }
}
module.exports=gettodobyid;