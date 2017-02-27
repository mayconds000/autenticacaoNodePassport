const mongoose = require('mongoose');

const User = mongoose.Schema({
  username: String,
  password: String,
  access_token: String,
});

module.exports = mongoose.model('User', User);