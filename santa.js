const express = require('express')
const santa = express()

const router = require('./router')

santa.use(express.urlencoded({extended: false}))
santa.use(express.json())

santa.use(express.static('public'))
santa.set('views', 'views')
santa.set('view engine', 'ejs')

santa.use('/', router)

santa.listen(3000)