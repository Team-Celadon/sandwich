// Listing the dependencies
const express = require('express')
const orm = require('../config/orm.js')
// Creating a router instance
const router = express.Router()

// Requiring passport
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

// Registering a user
router.post('/login', function (req, res) {
    // Need to add 'name' attributes to the divs for the sign up form
   let name = req.body.username
   let phone = req.body.phone
   let password = req.body.password

   console.log(name)

   // Validation
   req.checkBody('username', 'Username is required').notEmpty()

   let errors = req.validationErrors()

   if (errors) {
       throw error
   }
})

passport.use(new LocalStrategy(
    function(username, password, done) {
      User.findOne({ username: username }, function(err, user) {
        if (err) { return done(err); }
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        if (!user.validPassword(password)) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
      });
    }
  ));

passport.serializeUser(function(user, done) {
done(null, user.id);
});

passport.deserializeUser(function(id, done) {
User.findById(id, function(err, user) {
    done(err, user);
});
});


router.post('/login',
  passport.authenticate('local', {successRedirect: '/create', failureRedirect: '/login', failureFlash: true}),
  function(req, res) {
    res.redirect('/create')
  });

  module.exports = router