const express = require("express");
const morgan = require("morgan");

const userRouter = require("./routers/UserRouter.js");
const todoRouter = require("./routers/TodoRouter.js");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/user", userRouter);
app.use("/todo", todoRouter);

app.all("*", (_req, res) => {
  return res.status(404).json({ message: "Not Found" });
});

module.exports = app;
