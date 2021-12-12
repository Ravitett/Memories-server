const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    id: {type: Number, required:true, unique:true},
    name: {type: String, required:true},
    token: {type: String},
    tokenEnd: {type: String}
} ,{collection:'users'}) ;


const userModel = model('User', userSchema);
module.exports = userModel;
