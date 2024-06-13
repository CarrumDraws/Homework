const db = require("./connection.js");
const User = require("../models/User.js");
const Todo = require("../models/Todo.js");

(async () => {
  try {
    await Promise.all([Todo.deleteMany(), User.deleteMany()]);

    const user = new User({ username: "Will", password: "123456789" });

    const todoResponse = await fetch(
      "https://jsonplaceholder.typicode.com/todos"
    );
    const todos = await todoResponse.json();

    const todoInsertResults = await Todo.insertMany(
      todos.map((todo) => ({ title: todo.title, completed: todo.completed }))
    );

    user.todos = todoInsertResults.map((todo) => todo._id);
    await user.save();

    console.log("DB initialized");
  } catch (error) {
    console.error(error);
  } finally {
    await db.close();
  }
})();
