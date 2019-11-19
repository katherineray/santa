const express = require('express')
const santa = express()

santa.set('views', 'views')
santa.set('view engine', 'ejs')

santa.get('/', function(req, res) {
    res.render('home-guest')
})

santa.listen(3000)