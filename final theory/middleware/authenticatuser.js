const isUser=(req,res,next)=>{
if(!req.session.user.isAdmin){
    next();
}else{
    res.send('You are not user to view this page');
}};
module.exports={isUser};