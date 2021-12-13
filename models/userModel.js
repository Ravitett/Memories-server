const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    userType: {type: String , default:"u"},
    full_name: {type: String , default:"annonimous"},
    email: {type: String , unique:true},
    password: {type: String}
} ,{collection:'users'});

const userModel = model('User', userSchema);

exports.userModel = userModel;
