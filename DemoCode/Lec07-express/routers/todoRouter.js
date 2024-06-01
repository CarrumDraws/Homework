const express = require("express");
const todoRouter = express.Router();

// Cluster of routers to be exported
// Use in main file with 'app.use("/todo", todoRouter);'
todoRouter
  .route("/")
  .get((_req, res) => {
    res.send("Get all todos");
  })
  .post((_req, res) => {
    res.send("Create a todo");
  })
  .put((_req, res) => {
    res.send("Update a todo");
  })
  .patch((_req, res) => {
    res.send("Patch a todo");
  })
  .delete((_req, res) => {
    res.send("Delete a todo");
  });

module.exports = todoRouter;
