// const User = require('../models/User')

exports.login = function() {

}

exports.logout = function() {

}

exports.register = function(req, res) {
    //user with lowercase in the object, User with uppercase is blueprint for object
    let user = new User()
    res.send("Registration Page Comming Soon")
}

exports.home = function(req, res) {
    res.render('home-guest')
}