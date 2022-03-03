const authorize =(req,res,next)=>{
    const{user}=req.query;
    if(user=='john'){
        req.user={name:'sebnem',id:2}
        next()
    }
    else{
        res.status(404).send('unauthorized')
    }
    console.log("authorize");
    next()
}
module.exports=authorize