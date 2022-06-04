const joi = require('@hapi/joi')

const registerValidate = (data)=>{
    const Schema = joi.object({
        name: joi.string().required().min(5).max(50),
        email: joi.string().required().min(5).max(50),
        passoword: joi.string().required().min(6).max(100),
    })
    return Schema.validate(data)
}
const loginValidate = (data)=>{
    const Schema = joi.object({
        email: joi.string().required().min(5).max(50),
        passoword: joi.string().required().min(6).max(100),
    })
    return Schema.validate(data)
}
module.exports.loginValidate = loginValidate
module.exports.registerValidate = registerValidate
