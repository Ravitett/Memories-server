const {Schema, model} = require('mongoose');

const memorySchema = new Schema({
    id: {type: Number, required:true, unique:true},
    userID: {type: Number, required:true},
    from: {type: String, required:true},
    to: {type: String, required:true},
    departDate: {type: String, required:true},
    departTime: {type: String, required:true},
    arrDate: {type: String, required:true},
    arrTime: {type: String, required:true},
    arrLocation: {type: String, required:true}
} ,{collection:'memories'}) ;


    memorySchema.
    path('from')
    .set(from => String(from).toUpperCase());

    memorySchema.
    path('to')
    .set(to => String(to).toUpperCase());

   


const memoryModel = model('Memory', memorySchema);
module.exports = memoryModel;
