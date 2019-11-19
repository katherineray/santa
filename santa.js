const express = require('express')
const santa = express()

santa.get('/', function(req, res) {
    res.send("Welcome to Santa's Workshop")
})

santa.listen(3000)