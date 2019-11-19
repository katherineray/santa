let User = function(data) {
  this.data = data
  this.errors = []
}

User.prototype.validate = function() {
  if (this.data.username == "") {this.errors.push("You must provide a username")}
  if (this.data.email == "") {this.errors.push("You must provide a valid email address")}
  if (this.data.password == "") {this.errors.push("You must provide a password")}
}
 
User.prototype.register = function() {
  // Step 1: Validate user data
  this.validate() // this is called by the userController.js in register lowercase user.register
  //this.validate is the same as user.validate
  //Step 2: Only if no validation errors, then save the user data into a database
}

module.exports = User