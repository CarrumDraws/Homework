const express = require("express");
const app = express();
const path = require("path");
const routes = require("./routes");
const session = require("express-session");
const { v4: uuidv4 } = require("uuid");

// Configuring .env
require("dotenv").config({ path: path.join(__dirname, "../.env") });

// Applying middleware
app.use("/", express.json()); // parse requests with JSON payload/body
app.use("/public", express.static(path.join(__dirname, "/public"))); // serve static files
app.use(
  session({
    name: "SESSIONID",
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true, httpOnly: true, sameSite: "strict" },
    genid: () => uuidv4(),
  })
);

// Template engine configuration
app.set("views", path.join(__dirname, "/views")); // where template files are located
app.set("view engine", "ejs"); // default engine, dont need to specify .ejs extension

// Importing other routes
app.use("/user", routes.UserRouter);
app.use("/posts", routes.PostRouter);

app.get("/", (req, res) => {
  res.render("home", { loggedIn: req.session.uid ? true : false });
});

// Catch-all route for unsupported paths
app.all("*", (req, res) => {
  res.status(400).json({
    error: "InvalidURI",
    description: `The URI ${req.url} is not valid.`,
  });
});

module.exports = app;
