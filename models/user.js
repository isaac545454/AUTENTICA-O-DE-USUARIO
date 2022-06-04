const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {type: String, required: true, minlength: 3, maxlength: 50},
    email: {type: String, required: true, minlength: 10, maxlength: 100},
    passoword: {type: String, required: true, minlength: 8, maxlength: 100},
    admin: {type: Boolean, default: false},
    createDat: {type: Date, default: Date.now }
})

module.exports = mongoose.model('user', userSchema)