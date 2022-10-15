const mongoose = require('mongoose');

const User = mongoose.model('User', {
  firstName: String,
  lastName: String,
  username: String,
  email: String,
  password: String,
  number: String,
  gender: String
})

module.exports = User;