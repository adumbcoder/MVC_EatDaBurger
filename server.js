const express = require("express");

const PORT = process.env.PORT || 8080;

const app = express();
const routes = require("./controllers/burgers_controller.js");
const exphbs = require("express-handlebars");

app.use(express.static("public"));

//parse app body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

//start server
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});