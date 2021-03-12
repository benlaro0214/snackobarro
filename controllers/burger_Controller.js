//const and packages
const express = require("express");
const routes = express.Router(); 
const hamburger = require("../models/burgers.js");

// Get data and pipe it to layout.
routes.get("/", function(req, res) {
    console.log("Route Path Hit");
    hamburger.selectAll((data) => {
    handlebarsObject = { burger: data};
    res.render("index", handlebarsObject);
    });
});

routes.post("/api/burger", function(req, res) {
hamburger.insertOne(["burger_name","devoured"], [req.body["burger_name"], req.body.devoured], (result)=>{
res.json(result);
});
});

routes.put("/api/burger/:id", function(req, res) {
let burgerID = req.params.id
let condition = "id = " + burgerID ;
hamburger.updateOne(["devoured"], [req.body.devoured], condition, (result)=>{
// Sending back the ID of the new quote
    res.json(result);
  });
});

module.exports = routes;

