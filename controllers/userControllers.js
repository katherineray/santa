const User = require('../models/User')

exports.login = function (req, res) {
  let user = new User(req.body)
  console.log("reached!")
  user.login().then(function (result) {
    res.send(result)
  }).catch(function (error) {
    res.send(error)
  })
}

exports.logout = function () {

}

exports.register = function (req, res) {
  let user = new User(req.body)
  user.register()
  if (user.errors.length) {
    res.send(user.errors)
  } else {
    res.send("Congrats, you are registered")
  }
}

exports.home = function (req, res) {
  res.json({"success":true})
  //res.render('home-guest')
}