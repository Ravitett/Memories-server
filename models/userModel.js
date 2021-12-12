const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    _id:Schema.Types.ObjectId,
    userType: {type: String , default:"u"},
    full_name: {type: String , default:"annonimous"},
    email: {type: String , unique:true},
    password: {type: String}
} ,{collection:'users'}) ;


const userModel = model('users', userSchema);
module.exports = userModel;
