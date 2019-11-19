// console.log("I am executed immediately")
// module.exports = "I am the export for the router file"
const express = require('express')
const router = express.Router()

router.get('/', function(req, res) {
    res.render('home-guest')
})
module.exports = router