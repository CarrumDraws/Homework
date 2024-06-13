const express = require("express");
const app = express();

// Configures Express to serve files from the public directory
// (this is where pug looks)
app.use(express.static("public"));

// Set the template engine to pug
app.set("view engine", "pug");

// Home Page : Looks in "views" folder for "index" file
// Access Static Files through browser
app.get("/pug-home", (_req, res) => {
  res.render("index", { title: "Pug Home", number: 0 });
});

// todo page
app.get("/pug-user", (_req, res) => {
  res.render("user", { title: "Pug User", pageName: "User Page" });
});

// todo page
app.get("/pug-todo", (_req, res) => {
  res.render("todo", { title: "Pug Todo", pageName: "Todo Page" });
});

// start the server and listen on port 3000
app.listen(3000, () => {
  console.log("http://localhost:3000");
});
