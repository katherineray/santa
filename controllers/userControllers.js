const db = require("../models");
const bcrypt = require("bcryptjs");
const saltRounds = 13;

// Defining methods for the userController
module.exports = {
  findAll: function(req, res) {
    db.User.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.User.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  login: function(req, res) {
    db.User.findOne({ username: req.body.username })
      .then(dbModel =>
        bcrypt.compare(req.body.password, dbModel.password, (err, result) => {
          if (result === true) {
            res.json(dbModel);
          } else {
            res.send("Incorrect username or password!");
          }
        })
      )
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    bcrypt.genSalt(saltRounds, function(err, salt) {
      bcrypt.hash(req.body.password, salt, function(err, hash) {
        // Store hash in your password DB.
        let newUser = {
          username: req.body.username,
          password: hash,
          email: req.body.email
        };
        db.User.create(newUser)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      });
    });
  },
  update: function(req, res) {
    db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
