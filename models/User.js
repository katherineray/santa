const validator = require('validator')

let User = function(data) {
  this.data = data
  this.errors = []
}

User.prototype.validate = function() {
  if (this.data.username == "") {this.errors.push("You must provide a username.")}
  if (this.data.username != "" && !validator.isAlphanumeric(this.data.username)) {this.errors.push("Username can only contain letters and numbers.")}
  if (!validator.isEmail(this.data.email)) {this.errors.push("You must provide a valid email address.")}
  if (this.data.password == "") {this.errors.push("You must provide a password.")}
  if (this.data.password.length > 0 && this.data.password.length < 6) {this.errors.push("Password must be at least 6 characters.")}
  if (this.data.password.length > 20) {this.errors.push("Password cannot exceed 100 characters.")}
  if (this.data.username.length > 0 && this.data.username.length < 3) {this.errors.push("Username must be at least 3 characters.")}
  if (this.data.username.length > 20) {this.errors.push("Username cannot exceed 20 characters.")}
}
 
User.prototype.register = function() {
  // Step 1: Validate user data
  this.validate() // this is called by the userController.js in register lowercase user.register
  //this.validate is the same as user.validate
  //Step 2: Only if no validation errors, then save the user data into a database
}

module.exports = User