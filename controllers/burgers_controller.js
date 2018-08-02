var express = require("express");

var router = express.Router();

var path = require("path");
// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    burger.all(function (data) {

        var dataObject = {
            burgers: data
        };
        res.render("index", dataObject);
    });
});

router.post("/", function (req, res) {
    var body = req.body;

    burger.create(body.name, function (result) {
        res.json({ name: result.name});
    });
});



router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    burger.update(condition, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});




router.delete("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    burger.delete(condition, function (result) {
        if (result.affectedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
    });
});

// Export routes for server.js to use.
module.exports = router;
