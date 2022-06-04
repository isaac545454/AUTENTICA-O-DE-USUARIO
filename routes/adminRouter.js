const express = require('express')
const router = express.Router()
const auth = require('../controllrs/authController')

router.get('/', auth, (req, res)=>{

    if(req.user.admin){
    res.send("dados sensiveis")

    }else{
          res.status(401).send('not admin: acess danied')
    }

})

module.exports = router