const joi = require('joi');

exports.memoryJoi = {

    changeStatus(_data){
        let joiSchema = joi.object({
            status: joi.string().valid('pending','unChecked','approved','declined').required(), 
        });
        return joiSchema.validate(_data);
    },
    
    chatSaveMsg(_data){
        let joiSchema = joi.object({
            from: joi.string().valid('user', 'manager').required(),
            message: joi.string().required()
        });
        return joiSchema.validate(_data);
    }

}