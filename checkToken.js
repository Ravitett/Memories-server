const jwt = require("jsonwebtoken");
const express =require("express");

const checkToken = async(req, res, next) => {
    let token = req.header("x-API-key");
    if(!token) {
        return res.status(401).json({message: "you must send token"});
    }
    try {
        let verifyToken = jwt.verify(token, "ROTEMSECRET");
        console.log(verifyToken);
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({message: "error token"});

    }
}

exports.checkToken = checkToken;