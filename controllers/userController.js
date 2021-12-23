const {userModel,userValidation} = require("../models/userModel");
const bcrypt = require('bcrypt');
const { object } = require("joi");

exports.userController =  {

    async getAll(req,res){
        try {
            let data = await userModel.find({});
            res.json(data);
           
        } catch (error) {
            console.log(error);
            res.send("No users exsist");
        } 
    },

    async getByID(req,res){
        try {
            let data = await userModel.findOne({_id:req.params.id});
            res.json(data);
        } catch (error) {
            res.send("The user not exsist");
        } 
    },

    async add(req,res){

        let validUser = userValidation(req.body);
        if (validUser.error){
            console.log(validUser.error.details);
            return res.status(400).json(validUser.error.details);
        }

        try {

            const obj = new userModel(req.body);
            obj.password = await bcrypt.hash(obj.password,10);
            const result = await obj.save();

            if(result){
                res.json(result);
            } else{
                res.send("error");
            } 

        } catch (error) {
            console.log(error);
            res.send("somthing is broken");
        }
    },

    async update(req,res){

        try {
            let data = await userModel.updateOne({_id:req.params.id},req.body);
            if(data){
                res.send(data)
            } else{
                res.send("error");
            } 
        } catch (error) {
            res.send("somthing is broken");
        } 
    },

    async delete(req,res){
        try {
            let data = await userModel.deleteOne({_id:req.params.id});
            if(data){
                res.send(data)
            } else{
                res.send("error");
            } 
        } catch (error) {
            res.send("somthing is broken");
        } 
    }

}