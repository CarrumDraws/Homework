const mongoose = require("mongoose");
require("dotenv").config();

const { MONGO_URI } = process.env;

const Schema = mongoose.Schema;
const refType = Schema.Types.ObjectId; // Mongooses' "ObjectID" type

// one-to-one
const oneToOne = async () => {
  try {
    await mongoose.connect(MONGO_URI);

    // each user will have one todo, use refType as the todo's type which references to the Todo collection
    const UserSchema = new Schema({
      name: { type: String, required: true },
      email: { type: String, required: true },
      password: { type: String, required: true },
      todo: { type: refType, ref: "Todo" },
    });

    const TodoSchema = new Schema({
      title: { type: String, required: true },
      completed: { type: Boolean, default: false },
    });

    const User = mongoose.model("User", UserSchema);
    const Todo = mongoose.model("Todo", TodoSchema);

    // reset User and Todo model if it exists for demo purpose
    await Promise.all([User.deleteMany(), Todo.deleteMany()]);

    // create a user without saving
    const user = new User({
      name: "Will",
      email: "will@gmail.com",
      password: "123456789",
    });
    console.log("user:", user, "\n");

    // create a new todo
    const todo = await Todo.create({ title: "Learn Ref" });
    console.log("todo:", todo, "\n");

    // assign the todo to the user and save
    user.todo = todo._id;
    await user.save();
    console.log("user with todo ref:", user, "\n");

    // get User data along with Todo data
    const userWithTodo = await User.findById(user._id)
      // ??? Why do you need to specify "-_id -__v" twice?
      .select("-_id -__v") // Exclude _id and __v from result
      .populate("todo", "-_id -__v"); // Exclude _id and __v from populated todo documents
    console.log("user with todo:", userWithTodo, "\n");
  } catch (error) {
    console.error(error);
  } finally {
    await mongoose.disconnect();
  }
};
// oneToOne();

// one-to-many
const oneToMany = async () => {
  try {
    await mongoose.connect(MONGO_URI);

    // each user will have one todo, use refType as the todo's type which references to the Todo collection
    const UserSchema = new Schema({
      name: { type: String, required: true },
      email: { type: String, required: true },
      password: { type: String, required: true },
      todos: [{ type: refType, ref: "Todo" }],
    });

    const TodoSchema = new Schema({
      title: { type: String, required: true },
      completed: { type: Boolean, default: false },
    });

    const User = mongoose.model("User", UserSchema);
    const Todo = mongoose.model("Todo", TodoSchema);

    // reset User and Todo model if it exists for demo purpose
    await Promise.all([User.deleteMany(), Todo.deleteMany()]);

    // create a user without saving
    const user = new User({
      name: "Will",
      email: "will@gmail.com",
      password: "123456789",
    });
    console.log("user:", user, "\n");

    // create new todos
    const todos = Array.from({ length: 5 }).map((_, i) => ({
      title: `Todo ${i + 1}`,
    }));
    const createManyTodosResult = await Todo.insertMany(todos);
    console.log("Todo.insertMany:", createManyTodosResult, "\n");

    // assign todo ids to the user and save
    user.todos = createManyTodosResult.map((todo) => todo._id);
    await user.save();
    console.log("user with todo ref array:", user, "\n");

    // get User data along with Todos data
    const userWithTodos = await User.findById(user._id)
      .select("-_id -__v")
      .populate("todos", "-_id -__v");
    console.log("user with todos:", userWithTodos, "\n");
  } catch (error) {
    console.error(error);
  } finally {
    await mongoose.disconnect();
  }
};
// oneToMany();

// many-to-many
const manyToMany = async () => {
  try {
    await mongoose.connect(MONGO_URI);

    // each user will have one todo, use refType as the todo's type which references to the Todo collection
    const UserSchema = new Schema({
      name: { type: String, required: true },
      email: { type: String, required: true },
      password: { type: String, required: true },
      todos: [{ type: refType, ref: "Todo" }],
    });

    const TodoSchema = new Schema({
      title: { type: String, required: true },
      completed: { type: Boolean, default: false },
      users: [{ type: refType, ref: "User" }],
    });

    const User = mongoose.model("User", UserSchema);
    const Todo = mongoose.model("Todo", TodoSchema);

    // reset User and Todo model if it exists for demo purpose
    await Promise.all([User.deleteMany(), Todo.deleteMany()]);

    // create many users
    const users = Array.from({ length: 5 }).map((_, i) => ({
      name: `User ${i + 1}`,
      email: `user${i + 1}@gmail.com`,
      password: "123456789",
    }));
    const createManyUsersResult = await User.insertMany(users);
    console.log("User.insertMany:", createManyUsersResult, "\n");

    // create new todos
    const todos = Array.from({ length: 5 }).map((_, i) => ({
      title: `Todo ${i + 1}`,
    }));
    const createManyTodosResult = await Todo.insertMany(todos);
    console.log("Todo.insertMany:", createManyTodosResult, "\n");

    // assign todo ids to the first user
    const updatedUserResult = await User.findByIdAndUpdate(
      createManyUsersResult[0]._id,
      { todos: createManyTodosResult.map((todo) => todo._id) },
      { new: true }
    );
    console.log("User.findByIdAndUpdate:", updatedUserResult, "\n");

    // assign user ids to first todo
    const updatedTodoResult = await Todo.findByIdAndUpdate(
      createManyTodosResult[0]._id,
      { users: createManyUsersResult.map((user) => user._id) },
      { new: true }
    );
    console.log("Todo.findByIdAndUpdate:", updatedTodoResult, "\n");

    // get Users data along with Todos data
    const userWithTodos = await User.findOne()
      .select("-_id -__v")
      .populate({
        path: "todos",
        select: "-_id -__v",
        populate: { path: "users", select: "-_id -__v -todos" },
      });
    console.log("user with todos:", userWithTodos, "\n");
    console.log("todo with users:", userWithTodos.todos[0].users, "\n");
  } catch (error) {
    console.error(error);
  } finally {
    await mongoose.disconnect();
  }
};
manyToMany();
