const TODO=require('../modals/todoscheema');
async function createtodo(req,res){
try{
    const {title,description}=req.body;
    console.log(title," ",description);
    await TODO.create({title,description})
    res.status(200).json({
        "message":"added successfully"
    })
}catch(err){
    console.log("Todo addition failed");
     res.status(500).json({
        "message":err.message,
        "error":err
     })
}
}
module.exports=createtodo;