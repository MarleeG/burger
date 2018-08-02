// Import MySQL connection.
// var connection = require("../config/connection.js");
var connection = require("./connection.js");

// Object for all our SQL statement functions.
var orm = {
  all: function (tableInput, cb) {
    var queryString = "SELECT * FROM burgers;";
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },


  create: function (obj, cb) {
    var queryString = "INSERT INTO burgers (name) ";

    queryString += " VALUES (";
    queryString += "'" + obj.toString() + "'";
    queryString += ");";

    connection.query(queryString, {
      name: obj.name,
      devoured: false
    }, function (err, result) {

      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  // An example of objColVals would be {name: panther, sleepy: true}
  update: function (condition, cb) {
    var queryString = "UPDATE burgers";
    queryString += " SET devoured = true";
    queryString += " WHERE ";
    queryString += condition + ";";

    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },


  delete: function (condition, cb) {
    var queryString = "DELETE FROM burgers";
    queryString += " WHERE ";
    queryString += condition + ";";
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

// Export the orm object for the model (burger.js).
module.exports = orm;
