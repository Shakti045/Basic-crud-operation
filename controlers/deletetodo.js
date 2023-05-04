const TODO=require('../modals/todoscheema')
exports.deletetodo=async(req,res)=>{
    try{
        const {id}=req.params;
        await TODO.findByIdAndDelete({_id:id})
        res.status(200).json({
            "message":"Todo deleted successfully"
        })
    }catch(err){
        console.error(err).json({
            "message":"Todo deletion failed"
        })
    }
}