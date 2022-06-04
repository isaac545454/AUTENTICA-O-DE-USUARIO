const User = require("../models/user")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { loginValidate, registerValidate } = require('./valideti')

const userControle = {
 register: async function(req, res) {

    const {error} = registerValidate(req.body)
    if(error){return res.status(400).send(error.message)}

    const userSelect = await User.findOne({email: req.body.email})
    if(userSelect){
        return res.status(400).send("email already exists ")
    }
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        passoword: bcrypt.hashSync(req.body.passoword)
    })

    try {
        const savedUser = await user.save()
        res.send(savedUser)
    } catch (error) {
        res.status(400).send(error)
    }
},

 login: async function(req, res){

    const {error} = loginValidate(req.body)
    if(error){return res.status(400).send(error.message)}
   
    const userSelect = await User.findOne({ email: req.body.email })
    if(!userSelect )return res.status(400).send("email or password incorrect")
    
    const passowordAndUserMatch =bcrypt.compareSync(req.body.passoword, userSelect.passoword )
    if( !passowordAndUserMatch ) return res.status(400).send("email or password incorrect")

    const token = jwt.sign({_id: userSelect._id, admin: userSelect.admin}, process.env.TOKEN_SECRET)

    res.header("authotiztion", token)
    res.send("user logged")
}

}
module.exports = userControle