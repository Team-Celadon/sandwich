
// Listing the dependencies
const express = require('express')
const path = require('path')

// Creating a router instance
const router = express.Router()

// A route to display the login page
router.get('/login', function (req, res) {
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

// A route to display the voting page for the leaderboard
router.get('/vote', function (req, res) {
    res.sendFile(path.resolve('vote.html'))
})

module.exports = router
