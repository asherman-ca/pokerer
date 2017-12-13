const passport = require('passport');
const mongoose = require('mongoose');

const User = mongoose.model('users');

module.exports = app => {
  app.get('/api/users', async (req, res) => {
    const users = await User.find();
    console.log(users);
  });
};
