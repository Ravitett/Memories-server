const jwt = require("jsonwebtoken");
const {userModel} = require("../models/userModel");

const checkToken = async(req, res, next) => {
    let token = req.header("autorisation");
    if(!token) {
        return res.status(401).json({message: "you must send token"});
    }
    try {
        let verifyToken = jwt.verify(token, process.env.JWT_SECRET);
        res.locals.userID = await verifyToken._id;
        res.locals.userType = await getUserType(verifyToken._id);
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({message: "error token"});
    }
}
exports.checkToken = checkToken;

const checkIfManager = async(req, res, next) => {
    if(res.locals.userType != 'm'){
        res.status(403).json({status:"error", message: "you have to be manager"});
    }else{
        next();
    }
}
exports.checkIfManager = checkIfManager;

const getUserType = async(id) => {   
    try {
        let data = await userModel.findOne({_id: id});
        return data.userType;   
    } catch (error) {
        console.log(error);
        return "u";
    } 
}