function Middlewares(){

}

const handleError404 = (req,res,next)=>{
    if(res.headersSent){
        return next();
    }
    res.status(404).send({status: 404, message: `this url: ${req.url} doesnt exist`});
    //next();
};

module.exports = {
    handleError404
};