// Listing the dependencies
const express = require('express')
const orm = require('../config/orm')

// Creating a router instance
const router = express.Router()

// Registering a user
router.post('/login', function (req, res) {
    orm.addUser(req.body.username, req.body.phone, req.body.password, function (result) {
      console.log(req.body.username)
      res.json({ id: result.insertId })
    })
})

// Checking if a user is in the database
router.post('/login', function (req, res) {
  orm.checkUser(req.body.username, req.body.password, function (result) {
    console.log('Currently checking database')
    res.json({result})
  })
})

  module.exports = router