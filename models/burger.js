// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create(cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(condition, cb) {
    orm.update(condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete(condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;
