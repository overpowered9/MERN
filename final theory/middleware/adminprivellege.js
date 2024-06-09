const isAdmin=(req,res,next)=>{
    if(req.session.user && req.session.user.isAdmin){
        next();
    }else{
        res.send('You are not authorized to view this page');
    }
}
module.exports={isAdmin};