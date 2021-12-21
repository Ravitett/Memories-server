const { type } = require('express/lib/response');
const {Schema, model} = require('mongoose');

const memorySchema = new Schema({
    id: {type: Schema.Types.ObjectId, auto: true},/* לבנתיים */
    userID: Schema.Types.ObjectId,
    date: {type: String},
    location:{
        x:{type:String},
        y:{type: String}
    },
    tag:[String],
    gallery:[String],
    title: {type: String, require:true},
    memory:{type:String, required:true},
    aprove: {type: Boolean, default: false}
} ,{collection:'memories'}) ;


    // memorySchema.
    // path('from')
    // .set(from => String(from).toUpperCase());

    // memorySchema.
    // path('to')
    // .set(to => String(to).toUpperCase());

   


const memoryModel = model('Memory', memorySchema);
exports.memoryModel = memoryModel;
