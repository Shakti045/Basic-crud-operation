const TODO=require('../modals/todoscheema');
async function getalltodo(req,res){
    try{
       const alltodos= await TODO.find();
       res.status(200).json({
        "alltodos":alltodos
       })

    }catch(err){
        console.error(err);
        res.status(500).json({
            "message":"Server error",
            "error":err.message
        })
    }
}
module.exports=getalltodo;