const { Router } = require("express");
const userController = require("../controllers/UserController.js");
// const userMiddleware = require("../middlewares/UserMiddleware.js");

const userRouter = Router();

userRouter.get("/:id/songs", userController.getSongs);
userRouter.put(
  "/:id/info",
  //   userMiddleware.validateUserName,
  //   userMiddleware.validatePassword,
  userController.updateUser
);

module.exports = userRouter;
