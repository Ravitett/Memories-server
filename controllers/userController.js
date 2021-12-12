const {userModel} = require("../models/userModel");

exports.userController =  {

    async getAll(req,res){
        try {
            let data = await userModel.find({});
            res.json(data);
        } catch (error) {
            res.send("somthing is broken");
        } 
    },

    async getByID(req,res){
        try {
            let data = await userModel.findOne({id:req.params.id});
            res.json(data);
        } catch (error) {
            res.send("somthing is broken");
        } 
    },

    async add(req,res){
        try {

            const obj = new userModel(req.body);
            const result = await obj.save();

            if(result){
                res.json(result);
            } else{
                res.send("error");
            } 

        } catch (error) {
            res.send("somthing is broken");
        }
    },

    async update(req,res){
        try {
            let data = await userModel.updateOne({id:req.params.id},req.body);
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
            let data = await userModel.deleteOne({id:req.params.id});
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