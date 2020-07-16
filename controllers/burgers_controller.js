var express = require("express");

var router = express.Router();
var burger = require("../models/burger.js");

// route to get the burgers
router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  // express callback response. it's calling burger.selectAllBurger
  burger.all(function(burgerData) {
    // MySQL query callback will return burger_data, then render to index with handlebar
    res.render("index", { burger_data: burgerData });
  });
});

// route to post the burgers
router.post("/burgers/create", function(req, res) {
  // requests burger as input for burger.addBurger
  burger.create(req.body.burger_name, function(result) {
    // the MySQL input callback will return a log to console,
    // render back to index with handle
    console.log(result);
    res.redirect("/");
  });
});

// route that puts / updates new info about burger
router.put("/burgers/:id", function(req, res) {
  burger.update(req.params.id, function(result) {
    // wrapper for orm.js that using MySQL update callback will return a log to console,
    // render back to index with handle
    console.log(result);
    // Send back response and let page reload from .then in Ajax
    res.sendStatus(200);
  });
});

module.exports = router;
