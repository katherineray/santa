const User = require("../models/User");

exports.login = function(req, res) {
  let user = new User(req.body);
  console.log("reached!");
  user
    .login()
    .then(function(result) {
      res.send(result);
    })
    .catch(function(error) {
      res.send(error);
    });
};

exports.logout = function() {};

exports.register = function(req, res) {
  let user = new User(req.body);
  user.register();
  if (user.errors.length) {
    res.send(user.errors);
  } else {
    res.send("Congrats, you are registered");
  }
};

exports.home = function(req, res) {
  res.json({ success: true });
  // res.render('home-guest')
};

var express = require("express");
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/dashboardpage.html"));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/dashboard", function(req, res) {
  res.sendFile(__dirname + "/dashboardpage.html");
});

app.post("/login", function(req, res) {
  var username = req.body.username;
  console.log("User name = " + username);

  // Note how I'm redirecting the user to the /arena URL.
  // When you issue a redirect, you MUST redirect the user
  // to a webpage on your site. You can't redirect thto
  // a file you have on your disk.
  res.redirect("/dashboardpage");
});
