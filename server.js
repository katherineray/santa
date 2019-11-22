const express = require('express')
const app = express()

const router = require('./router')

const dotenv = require('dotenv')
dotenv.config()
const mongodb = require('mongodb')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(express.static('public'))
app.set('views', 'views')
app.set('view engine', 'ejs')

app.use('/', router)

mongodb.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, client) {
    module.exports = client.db()
    app.listen(process.env.PORT)
})