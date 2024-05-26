const {Joi, validate} = require("express-validation")

const addUserValidation = validate({
    body: Joi.object({
        fullname: Joi.string().min(3).required(),
        login: Joi.string().min(3).required(),
        password: Joi.string().min(3).required(),
        role: Joi.string()
	}).options({allowUnknown: false})
});

const editUserValidation = validate({
    params: Joi.object({
        id: Joi.string().required()
    }).options({allowUnknown: false}),
    body: Joi.object({
        login: Joi.string(),
        password: Joi.string(),
	}).options({allowUnknown: false})
});

module.exports = {
    addUserValidation,
    editUserValidation
}