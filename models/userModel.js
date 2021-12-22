const {Schema, model, Types} = require('mongoose');
const joi = require('joi');

const userSchema = new Schema({
    _id:{type:Types.ObjectId, auto: true},
    userType: {type: String , default:"u"},
    full_name: {type: String , default:"annonimous"},
    email: {type: String, unique: true},
    password: {type: String}
} ,{collection:'users'});

const userModel = model('User', userSchema);

exports.userModel = userModel;

exports.userValidation = (_data) => {
    let joiSchema = joi.object({
        email: joi.string().min(5).max(250).email().required(), 
        password: joi.string().min(8).max(100).required(),
        full_name: joi.string()
    });
    return joiSchema.validate(_data);
}
