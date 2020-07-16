// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(name, cb) {
    orm.create("burgers", [
        "burger_name", "devoured"
    ], [
        name, false
    ], cb);
  },
  update: function(id, cb) {
    orm.update("burgers", {
        devoured: true
    }, condition, cb);
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;