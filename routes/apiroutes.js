// Listing the dependencies
const express = require('express')
const orm = require('../config/orm')

// Creating a router instance
const router = express.Router()

// Requiring passport
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

// Registering a user
router.post('/login', function (req, res) {
    orm.addUser(req.body.username, req.body.phone, req.body.password, function (result) {
      console.log(req.body.username)
      res.json({ id: result.insertId })
    })
})

router.post('/login',
  passport.authenticate('local', {successRedirect: '/create', failureRedirect: '/login'}),
  function(req, res) {
    res.redirect('/create')
  });

  module.exports = router