const express = require('express')
const santa = express()

const router = require('./router')

santa.use(express.static('public'))
santa.set('views', 'views')
santa.set('view engine', 'ejs')

santa.use('/', router)

santa.listen(3000)