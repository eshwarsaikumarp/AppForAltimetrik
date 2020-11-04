const Joi = require('joi');

function validateLogin(user) {
    const schema = Joi.object({
        email: Joi.string().min(10).max(255).required().email(),
        password: Joi.string().min(5).max(255).required()
    });
    return schema.validate(user);
}

function validateNewUser(user) {
    const schema = Joi.object({
        name: Joi.string().min(5).max(50).required(),
        city: Joi.string().min(3).max(50).required(),
        email: Joi.string().min(10).max(255).required().email(),
        password: Joi.string().min(5).max(255).required()
    });
    return schema.validate(user);
}

module.exports = {
    validateLogin,
    validateNewUser
}