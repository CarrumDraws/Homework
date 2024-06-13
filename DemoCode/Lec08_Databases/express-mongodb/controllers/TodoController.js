const Todo = require("../models/Todo.js");
const User = require("../models/User.js");

const getTodoById = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findById(id);

    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getAllTodosByUserId = async (req, res) => {
  try {
    const { userId, pageSize, pageNumber } = req.params;
    // pagination
    // .populate replaces todos[] ObjectId's witt their respective todos
    const user = await User.findById(userId).populate({
      path: "todos", // the field in User you want to populate
      options: {
        limit: pageSize, // Max amount of todos to retrieve
        skip: (pageNumber - 1) * pageSize, // Which todos to look at
      },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user.todos);
  } catch (error) {
    res.status(500).json(error);
  }
};

const postCreateTodo = async (req, res) => {
  try {
    const { userId } = req.params;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const todo = await Todo.create(req.body);
    user.todos.push(todo); // Add todo to User's todos array. Just pushes the _id property.
    await user.save();

    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json(error);
  }
};

const patchToggleStatus = async (req, res) => {
  try {
    const { id } = req.params;

    const todo = await Todo.findById(id);

    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    todo.completed = !todo.completed;
    await todo.save();

    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteTodoById = async (req, res) => {
  try {
    const { id, userId } = req.params;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.todos = user.todos.filter((todoId) => todoId.toString() !== id);

    await Promise.all([user.save(), Todo.findByIdAndDelete(id)]);

    res.status(204).end();
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getTodoById,
  getAllTodosByUserId,
  postCreateTodo,
  patchToggleStatus,
  deleteTodoById,
};
