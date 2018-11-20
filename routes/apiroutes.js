// Listing the dependencies
const express = require('express')
const orm = require('../config/orm')
const { isCorrectLength } = require("simply_valid/is")

// Creating a router instance
const router = express.Router()

// Registering a user
router.post('/', function (req, res) {
    orm.addUser(req.body.username, req.body.phone, req.body.password, function (result) {
      console.log(req.body.username)
      res.json({ id: result.insertId })
    })
})

// Checking if a user is in the database
router.post('/api/login', function (req, res) {
  orm.checkUser(req.body.username, req.body.password, function (error, result) {
    if (error) {
      throw error
    } else {
      if (result.length > 0) {
        if (result[0].password == req.body.password) {
          res.send({
            'code': 200,
            'success': 'Login successful'
          })
        } else {
          res.send({
            'code': 204,
            'success': 'Email and password do not match'
          })
        }
      }
    } 
  })
})

// // Updating the rating
// router.put('/api/rate', function() {
//   var rating = $( 'input[name=rate]:checked' ).val();
//   orm.updateRating("rating", rating, req.body.sandwich_id, req.body.user_id, function (result) {
//     res.json({
//       success: true
//     })
//   })
// });

// Posting the sandwich name to the database
router.post('/api/create/sandwich', function(req, res) {

  orm.insertSandwich(req.body.sandwichName, req.params.user_id), function (result) {
    res.json({ id: result.insertId })
  }
  // Using simplyValid to make sure the sandwich name is between a certain length
  simplyValid.isCorrectLength(
    {
      maxLen: 50,
      minLen: 5
    },
    req.body.sandwichName
  )
});

// Posting the meat into the database
router.post('/api/create/meat', function(req, res) {

  for (i = 0; i < req.body.meatArray.length; i++) {
    orm.insertMeat(req.body.meatArray[i], req.params.sandwich_id, function (result) {
      res.json({ id: result.insertId })
    })
  }
})

// Posting the toppings into the database
router.post('/api/create/toppings', function(req, res) {

  for (i=0; i < req.body.toppingsArray.length; i++) {
    orm.insertToppings(req.body.toppingsArray[i], req.params.sandwich_id, function (result) {
      res.json({ id: result.insertId })
    })
  }
})

// Getting the sandwich data from the database for the features page
router.get('/api/menu', function(req, res) {
  orm.selectStandard(function (data) {
    var sandwich = {
      sandwiches: data
    }
    console.log(sandwich)
    
    res.json(data)
  })
})


// Exporting the router
  module.exports = router