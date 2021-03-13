//Const & Packages
const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require("body-parser"); 
const exphbs = require("express-handlebars"); 


//Express Server
const app = express();
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(express.static("public")); 
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


//Routing
const routes = require("./controllers/burger_Controller.js");
app.use("/", routes);

//Server port and listening
let PORT = process.env.PORT ||3001; // adjust this to 3001 for Heroku, 8080 for local dev.
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});