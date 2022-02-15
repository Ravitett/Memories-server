const joi = require('joi');

exports.authJoi = {

    login(_data){
        let joiSchema = joi.object({
            email: joi.string().email().required(), 
            password: joi.string().required()
        });
        return joiSchema.validate(_data);
    },

    register(_data){
        console.log(_data);
        let joiSchema = joi.object({
            email: joi.string().email().required(), 
            full_name: joi.string(), 
            password: joi.string().required(),
            confirmPassword: joi.string().required()
        });
        return joiSchema.validate(_data);
    },

}