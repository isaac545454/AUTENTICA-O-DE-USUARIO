require('dotenv').config()
const express = require('express')
const app = express()
const userRouter = require('./routes/userRouter')
const mongoose = require('mongoose')
const admin = require('./routes/adminRouter')

app.use('/user', userRouter)
app.use('/admin', admin)

mongoose.connect("mongodb://localhost:27017/users" , 
 {
     useNewUrlParser: true,
     useUnifiedTopoLogy: true
 })
const db = mongoose.connection

db.on("err", ()=>{console.log('houve um erro')})
db.once('open', ()=>{console.log("conectado")})

app.listen(process.env.PORT, ()=>{console.log('server rodando')})