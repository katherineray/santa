const express = require('express')
const app = express()

const router = require('./router')
const mongoose = require("mongoose");
const dotenv = require('dotenv')
dotenv.config()
const mongodb = require('mongodb')
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(express.static('public'))

app.use(router)

app.post('/login', req => console.log(req))

mongoose.connect(process.env.MONGODB_URI || process.env.CONNECTIONSTRING)

app.listen(process.env.PORT)