const {Schema, model} = require('mongoose');

const memorySchema = new Schema({
    _id: {type: Schema.Types.ObjectId, auto: true},
    userID: {type:Schema.Types.ObjectId,ref:'User',required:true},
    date: {type: String},
    location:{
        lat:{type:Number},
        lng:{type: Number}
    },
    tag:[String],
    gallery:[String],
    title: {type: String, require:true},
    memory:{type:String, required:true},
    status: {type: String, default: "unChecked"},
    chat: {type:[{from:{type:String},message:{type:String}, time:{type: Date, default: Date.now}}]}
} ,{collection:'memories'}) ;

const memoryModel = model('Memory', memorySchema);
exports.memoryModel = memoryModel;


