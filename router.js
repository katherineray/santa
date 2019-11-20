// console.log("I am executed immediately")
// module.exports = "I am the export for the router file"
const express = require('express')
const router = express.Router()
const userController = require('./controllers/userControllers')

router.get('/', userController.home)
router.post('/register', userController.register)
router.post('/login', userController.login)

module.exports = router