const { memoryModel } = require("../models/memoryModel");
const { memoryJoi } = require("../joi/memoryJoi")

exports.memoryController = {

    async getAll(req, res) {
        try {
            const memories = await memoryModel.find({status:'approved'})
                .select(['_id','date','memory','title','gallery','location']);
            res.json(memories);
        } catch (error) {
            res.json({ status: "error", message: "error in DB connection" });
        }
    },

    async getByID(req, res) {
        try {
            const memory = await memoryModel.findOne({_id:req.params.memoryid})
                .select(['date','memory','title','gallery']);
            res.json(memory);
        } catch (error) {
            res.json({ status: "error", message: "Id not exist" });
        }
    },
    
    async getChatByID(req, res) {
        try {
            const memory = await memoryModel.findOne({_id:req.params.memoryid})
                .select(['chat']);
            res.json(memory);
        } catch (error) {
            res.json({ status: "error", message: "id not exist" });
        }
    },

    async getAllForUser(req, res) {
        try {
            const memories = await memoryModel.find({userID:res.locals.userID});
            memories.map((m)=>{
                switch (m.status) {
                    case 'pending':
                        m.status = "בהמתנה";
                        break;
                    case 'unChecked':
                        m.status = "לא נבדק";
                        break;
                    case 'approved':
                        m.status = "אושר";
                        break;
                    case 'declined':
                        m.status = "לא אושר";
                        break;
                }
            })
            res.json(memories);
        } catch (error) {
            res.json({ status: "error", message: "id not exist" });
        }
    },

    async getByIdForUser(req, res) {
        try {
            const memories = await memoryModel.findOne({_id: req.params.memoryid});
            res.json(memories);
        } catch (error) {
            res.json({ status: "error", message: "id not exist" });
        }
    },
    async getAllForManeger(req, res) {
        try {
            const memories = await memoryModel.find().or([{ status: "unChecked" }, { status: "pending" }])
                .populate('userID', 'full_name');
            let sendMemory = memories.map((m) => {
                return {
                    _id: m._id,
                    date: m.date,
                    full_name: m.userID.full_name,
                    title: m.title,
                    status: m.status == 'unChecked' ? 'לא נבדק' : 'בהמתנה'
                }
            })
            res.json(sendMemory);
        } catch (error) {
            res.json({ status: "error", message: "id not exist" });
        }
    },

    async getByIdForManeger(req, res) {
        try {
            const memories = await memoryModel.findOne({ _id: req.params.memoryid })
                .populate('userID', 'full_name');
            let sendMemory = {
                _id: memories._id,
                date: memories.date,
                full_name: memories.userID.full_name,
                title: memories.title,
                memory: memories.memory,
                status: memories.status == 'unChecked' ? 'לא נבדק' : 'בהמתנה',
                chat: memories.chat
            }
            res.json(sendMemory);
        } catch (error) {
            console.log(error);
            res.json({ status: "error", message: "id not exist" });
        }
    },

    async getBadWords(req, res) {
        res.json(require("../services/badWords.json"))
    },

    async add(req, res) {
        let joi = memoryJoi.add(req.body);
        if (joi.error) return res.json({ status: "error", message: joi.error.details[0].message });
        
        try {
            let body = req.body;
            body.userID = res.locals.userID;
            const obj = new memoryModel(body);
            const result = await obj.save();
            if(result){
                res.json({ status: "success", message: `memory added successfully` });
            } else{
                res.json({status:"error", message: "memory not added"});
            } 
        } catch (error) {
            res.status(400).json({status:"error", message: "error in DB connection"});
        }
    },

    async update(req, res) {
        let joi = memoryJoi.add(req.body);
        if (joi.error) return res.json({ status: "error", message: joi.error.details[0].message });
        try {
            let data = await memoryModel.updateOne({_id:req.params.id},req.body);
            if (data) {
                res.json({ status: "success", message: `memory updated successfully to ${req.body.status}` });
            } else {
                res.json({ status: "error", message: `id not exist` });
            }
        } catch (error) {
            res.status(400).json({ status: "error", message: `error in DB connection` });
        }

    },

    async changeStatus(req, res) {
        let joi = memoryJoi.changeStatus(req.body);
        if (joi.error) return res.json({ status: "error", message: joi.error.details[0].message });
       
        try {
            let data = await memoryModel.updateOne({ _id: req.params.id }, req.body);
            if (data.acknowledged && data.modifiedCount == 1) {
                res.json({ status: "success", message: `status updated successfully to ${req.body.status}` });
            } else {
                res.json({ status: "error", message: `status is allready ${req.body.status}` });
            }
        } catch (error) {
            res.status(400).json({ status: "error", message: `error in DB connection` });
        }
    },

    async chatSaveMsg(req, res) {
        let joi = memoryJoi.chatSaveMsg(req.body);
        if (joi.error) return res.json({ status: "error", message: joi.error.details[0].message });

        try {
            let data = await memoryModel.updateOne({ _id: req.params.id }, { $push: { chat: req.body } });
            if (data.acknowledged && data.modifiedCount == 1) {
                res.json({ status: "success", message: `chat updated successfully` });
            } else {
                res.json({ status: "error", message: `chat not updated` });
            }
        } catch (error) {
            res.status(400).json({ status: "error", message: `error in DB connection` });
        }
    },

    async delete(req, res) {
        try {
            let data = await memoryModel.deleteOne({_id:req.params.id});
            if(data){
                res.json({ status: "success", message: `memory deleted successfully` });
            } else{
                res.status(400).json({ status: "error", message: `error in DB connection` });
            } 
        } catch (error) {
            res.status(400).json({ status: "error", message: `error in DB connection` });
        } 
    }
}

