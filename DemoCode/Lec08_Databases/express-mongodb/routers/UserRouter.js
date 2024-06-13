const { Router } = require("express");
const userController = require("../controllers/UserController.js");
const userMiddleware = require("../middlewares/UserMiddleware.js");

const userRouter = Router();

userRouter.get("/:id", userController.getUserById);
userRouter.post(
  "/",
  userMiddleware.validateUserName,
  userMiddleware.validatePassword,
  userController.postCreateUser
);
userRouter.put(
  "/",
  userMiddleware.validateUserName,
  userMiddleware.validatePassword,
  userController.putUpdateUser
);
userRouter.delete("/:id", userController.deleteUserById);

module.exports = userRouter;
