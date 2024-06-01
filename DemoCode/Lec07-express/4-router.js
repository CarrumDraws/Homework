const express = require("express");
const app = express();

const todoRouter = require("./routers/todoRouter.js");
const userRouter = require("./routers/userRouter.js");

// built-in middleware for recognizing incoming request data as JSON object
app.use(express.json());

// Import Routers from other files use the routers as middlewares
app.use("/todo", todoRouter);
app.use("/user", userRouter);

// start the server and listen on port 3000
app.listen(3000, () => {
  console.log("http://localhost:3000");
});
