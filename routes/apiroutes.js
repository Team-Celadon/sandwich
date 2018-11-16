const express = require("express");
const router = express.Router();

// var sandwichData = require("../data/sandwichData");

// ===============================================================================
// ROUTING
// ===============================================================================

router.get("/sandwich", function(req, res) {
  res.send({ type: "GET" });
  // res.json(sandwichData);
});
router.post("/sandwich", function(req, res) {
  res.send({ type: "POST" });
  // res.json(sandwichData);
});
router.put("/sandwich/:id", function(req, res) {
  res.send({ type: "PUT" });
  // res.json(sandwichData);
});
router.delete("/sandwich/:id", function(req, res) {
  res.send({ type: "DELETE" });
  // res.json(sandwichData);
});

module.exports = router;
