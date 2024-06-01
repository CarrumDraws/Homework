const express = require("express");
const app = express();

const logger = require("morgan");

const todoRouter = require("./routers/todoRouter.js");
const userRouter = require("./routers/userRouter.js");

// built-in middleware for recognizing incoming request data as JSON object
app.use(express.json());

app.use(logger("dev")); // Auto-logs all requests

app.use("/todo", todoRouter);
app.use("/user", userRouter);

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
