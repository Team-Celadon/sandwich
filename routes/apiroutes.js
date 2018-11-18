// Listing the dependencies
const express = require("express");
const { isCorrectLength } = require("simply_valid/is");

const orm = require("../config/orm");

// Creating a router instance
const router = express.Router();

// Requiring passport
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

// Test to make sure simply_validate works
console.log(
  isCorrectLength(
    {
      maxLen: 10,
      minLen: 1
    },
    "thefodihioqwjfiojwqfjqwi"
  )
);

// Registering a user
router.post("/login", function(req, res) {
  orm.addUser(req.body.username, req.body.phone, req.body.password, function(
    result
  ) {
    console.log(req.body.username);
    res.json({ id: result.insertId });
  });
});

router.post("/create", function(req, res) {
  console.log("REQ BODY: ", req.body);

  simplyValid.isCorrectLength(
    {
      maxLen: 15,
      minLen: 3
    },
    req.body.sandwichName
  );
});

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/create",
    failureRedirect: "/login"
  }),
  function(req, res) {
    res.redirect("/create");
  }
);

module.exports = router;
