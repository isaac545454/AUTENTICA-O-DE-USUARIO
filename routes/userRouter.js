const express = require('express')
const router = express.Router()
const userControle = require('../controllrs/controller')

router.post('/register', express.json( ), userControle.register)
router.post('/login', express.json(), userControle.login) 

module.exports = router