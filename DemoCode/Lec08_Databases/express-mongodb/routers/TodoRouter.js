const { Router } = require("express");
const TodoController = require("../controllers/TodoController.js");

const todoRouter = Router();

todoRouter.get("/:id", TodoController.getTodoById);
todoRouter.get(
  "/all/:userId/:pageNumber/:pageSize",
  TodoController.getAllTodosByUserId
);
todoRouter.post("/:userId", TodoController.postCreateTodo);
todoRouter.patch("/:id", TodoController.patchToggleStatus);
todoRouter.delete("/:id/:userId", TodoController.deleteTodoById);

module.exports = todoRouter;
