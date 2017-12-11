// just requiring something simply runs it instead of assigning it to a variable
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
const sassMiddleware = require('node-sass-middleware');
const path = require('path');

require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(
  sassMiddleware({
    src: path.join(__dirname, 'sass'),
    dest: path.join(__dirname, 'public')
  })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

app.set('view engine', 'ejs');

app.get(['/'], (req, res) => {
  res.render('index');
});

app.use(express.static(__dirname + '/public'));

const PORT = process.env.PORT || 5000;
app.listen(PORT);
