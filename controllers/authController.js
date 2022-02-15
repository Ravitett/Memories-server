const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');

const {userModel} = require("../models/userModel");
const {authJoi} = require("../joi/authJoi")

exports.authController =  {

    isToken(req,res){
        res.json({token:true});
    },

    isAdmin(req,res){
        res.json({admin:true})
    },

    async login(req,res){
        let joi = authJoi.login(req.body);
        if (joi.error) return res.json({ status: "error", message: joi.error.details[0].message });

        let user = await userModel.findOne({email: req.body.email})
        if(!user) {
            return res.json({ status: "error", message: `user not found` });
        }
        let comperPassord = await bcrypt.compare(req.body.password, user.password);
        if(!comperPassord){
            return res.json({ status: "error", message: `worng password` });
        }
        let newToken = jwt.sign({_id: user._id}, process.env.JWT_SECRET, {expiresIn: "30d"});
        res.json({status: "success", token: newToken, id:user._id, fullName: user.full_name, type: user.userType});
    },

    async register(req,res){
        let joi = authJoi.register(req.body);
        if (joi.error) return res.json({ status: "error", message: joi.error.details[0].message });
        
        if(req.body.password !== req.body.confirmPassword){
            return res.json({ status: "error", error:1, message: `The passwords are not the same` });
        }
        let user = await userModel.findOne({email: req.body.email})
        if(user) {
            return res.json({ status: "error", error:2, message: `Username is already taken` });
        }
        try {
            const newUser = new userModel(req.body);
            newUser.password = await bcrypt.hash(newUser.password,10);
            const result = await newUser.save();
            if(!result) return res.json({ status: "error", error:0, message: "error in DB connection" });
            return res.json({ status:"success", message: `The user is saved` }); 
        } catch (error) {
            res.json({ status:"error", error:0, message: "error in DB connection" });
        }   
    }
}