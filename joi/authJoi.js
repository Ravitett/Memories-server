const joi = require('joi');

exports.authJoi = {

    login(_data){
        let joiSchema = joi.object({
            email: joi.string().email().required(), 
            password: joi.string().required()
        });
        return joiSchema.validate(_data);
    },

}