const errorHandler = (err, req, res, next) =>{
    console.log(err);

    if(err.name === "ErrorNotFound"){
        res.status(404).json({message: "error not found"});
    }

    else{
        res.status(500).json({message: "internal server error"});
    }
}

module.exports = errorHandler;