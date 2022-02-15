const {userModel} = require("../models/userModel");
const {userJoi} = require("../joi/userJoi")

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
       
    },

    async add(req,res){

        
       
    },

    async update(req,res){

       
    },

    async delete(req,res){
        
    }

}