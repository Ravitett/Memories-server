const joi = require('joi');

exports.memoryJoi = {

    add(_data){
        let joiSchema = joi.object({
            date: joi.string().required(),
            location: {
                lat: joi.number().required(),
                lng: joi.number().required()
            },
            gallery: joi.array(),
            title: joi.string().required(),
            memory: joi.string().required()
        });
        return joiSchema.validate(_data);
    },

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