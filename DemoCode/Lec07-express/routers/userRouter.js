const express = require("express");
const userRouter = express.Router();

userRouter.get("/all", (_req, res) => {
  res.send("Get all users");
});
userRouter.post("/create", (_req, res) => {
  res.send("Create a user");
});
userRouter.put("/update", (_req, res) => {
  res.send("Update a user");
});
userRouter.delete("/delete/:userId", (req, res) => {
  res.send(`Delete user with ID ${req.params.userId}`);
});

module.exports = userRouter;
