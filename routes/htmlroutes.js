// Listing the dependencies
const express = require('express')
const path = require('path')

// Creating a router instance
const router = express.Router()

// A route to display the login page
router.get('/', function (req, res) {
    res.sendFile(path.resolve('login.html'))
})

// A route to display the create a sandwich page
router.get('/create', function (req, res) {
    res.sendFile(path.resolve('create.html'))
})

// A route to display the featured sandwiches
router.get('/features', function (req, res) {
    res.sendFile(path.resolve('features.html'))
})

module.exports = router