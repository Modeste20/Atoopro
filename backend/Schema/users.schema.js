const joi = require('joi');

const userSchema = joi.object({
    username:joi.string().pattern(/^[A-Z,a-z]+.*$/).min(5).required(),
    mail:joi.string().email().required(),
    password:joi.string().pattern(/[A-Z]{1}.*[A-Z]{1}/).pattern(/[0-9]{1}.*[0-9]{1}.*[0-9]{1}/).min(10).required()
})

const loginUserSchema = joi.object({
    mail:joi.string().required(),
    password:joi.string().required()
})

module.exports = {userSchema,loginUserSchema};
