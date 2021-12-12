const {Schema, model} = require('mongoose');

const memorySchema = new Schema({
    _id:Schema.Types.ObjectId,
    userID: Schema.Types.ObjectId,
    date: {type: String},
    location:{
        x:{type:String},
        y:{type: String}
    },
    tag:[String],
    gallery:[String],
    memory:{type:String, required:true}
} ,{collection:'memories'}) ;


    // memorySchema.
    // path('from')
    // .set(from => String(from).toUpperCase());

    // memorySchema.
    // path('to')
    // .set(to => String(to).toUpperCase());

   


const memoryModel = model('Memory', memorySchema);
module.exports = memoryModel;
