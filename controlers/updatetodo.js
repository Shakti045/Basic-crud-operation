const TODO=require('../modals/todoscheema');
exports.updatetodo=async (req,res)=>{
    try{
        const {id}=req.params;

        const {title,description}=req.body;

         await  TODO.findByIdAndUpdate({_id:id},{"title":title,"description":description,"updatedat":Date.now()})
        res.status(200).json({
            "message":`Todo for id ${id} updated successfully`
        })
    }catch(err){
        res.status(500).json({
            "message":"todo updation failed",
            "error":err.message
        })
    }
}