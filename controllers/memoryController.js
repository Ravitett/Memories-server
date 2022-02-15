const {memoryModel} = require("../models/memoryModel");
const {memoryJoi} = require("../joi/memoryJoi")

exports.memoryController =  {

    async getAll(req,res){
<<<<<<< HEAD
        try {

            
                let data = await memoryModel.find({aprove: true});
                res.json(data);
            
              
        } catch (error) {
            res.send("somthing is broken");
        } 
    },
    async getAllManeger(req,res){
        try {

            if(res.locals.userType == 'm'){
                let data = await memoryModel.find({});
                res.json(data);
            }else{
                
                res.send("you have to be maneger")
            }
              
        } catch (error) {
            res.send("somthing is broken");
        } 
    },

    async getByID(req,res){
        try {
            let data = await memoryModel.findOne({_id:req.params.id});
            res.json(data);
        } catch (error) {
            res.send("somthing is broken");
        } 
=======
        
    },
    async getAllByUserID(req,res){
       
    },
    async getAllManeger(req,res){
       
>>>>>>> init-project
    },

    async getByID(req,res){

<<<<<<< HEAD
            const obj = new memoryModel(req.body);
            const result = await obj.save();
=======
    },
>>>>>>> init-project

    async getBadWords(req,res){
        
    },

<<<<<<< HEAD
        } catch (error) {
            console.log(error);
            res.json({err:true});
        }
    },

    async update(req,res){
        try {
            let data = await memoryModel.updateOne({_id:req.params.id},req.body);
            if(data){
                res.send(data)
            } else{
                res.send("error");
            } 
        } catch (error) {
            res.send("somthing is broken");
        } 
=======
    async add(req,res){
        
    },

    async update(req,res){
        
    },

    async changeStatus(req,res){
       
        
>>>>>>> init-project
    },
    async aproveMemory(req,res){
        try {

            if(res.locals.userType == 'm'){
                let data = await memoryModel.updateOne({_id:req.params.id},{aprove: true});
                if(data){
                    res.send(data.acknowledged)
                } else{
                    res.send(false);
                } 
            }else{
                
                res.send("you have to be maneger")
            }
            
            
        } catch (error) {
            res.send("somthing is broken");
        } 
    },

    async chatSaveMsg(req, res) {
      
    },
    async delete(req,res){
<<<<<<< HEAD
        try {
            let data = await memoryModel.deleteOne({_id:req.params.id});
            if(data){
                res.send(data)
            } else{
                res.send("error");
            } 
        } catch (error) {
            res.send("somthing is broken");
        } 
=======
        
        
>>>>>>> init-project
    }

}

