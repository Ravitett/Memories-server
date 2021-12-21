const jwt = require("jsonwebtoken");
const express =require("express");
const {userModel,userValidation} = require("./models/userModel");

const getUserType = async(_id) => {
    try {
        let data = await userModel.findOne({_id: _id});
        return data.userType;   
    } catch (error) {
        console.log(error);
        return "u";
    } 
}

const checkToken = async(req, res, next) => {
    let token = req.header("autorisation");
    if(!token) {
        return res.status(401).json({message: "you must send token"});
    }
    try {
        let verifyToken = jwt.verify(token, "ROTEMSECRET");
        res.locals.userType = await getUserType(verifyToken._id);
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({message: "error token"});
    }
}

exports.checkToken = checkToken;