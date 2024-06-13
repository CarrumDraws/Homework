// enabling env variables
require("dotenv").config();

const mongoose = require("mongoose");
const { MONGO_URI } = process.env;

(async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected\n");

    // create Todo Schema
    const Schema = mongoose.Schema;
    const TodoSchema = new Schema({
      title: { type: String, required: true },
      completed: { type: Boolean, default: false },
    });

    // create Todo model
    const Todo = mongoose.model("Todo", TodoSchema);

    // reset Todo model if it exists for demo purpose
    await Todo.deleteMany(); // No Filter Provided: Will delete ALL documents
    console.log("Todo model reset\n");

    // create a new todo
    const createTodoResult = await Todo.create({ title: "Learn MongoDB" });
    console.log("Todo.create:", createTodoResult, "\n");

    // Todo.create is equivalent to new Todo + save
    const newTodo = await new Todo({ title: "Learn Node" }).save();
    console.log("new Todo + save:", newTodo, "\n");

    // insert many todos at once
    const todos = Array.from({ length: 5 }).map((_, i) => ({
      title: `Todo ${i + 1}`,
    }));
    const createManyTodosResult = await Todo.insertMany(todos); // Insert Multiple Todos
    console.log("Todo.insertMany:", createManyTodosResult, "\n");

    // finding all todos
    const allTodos = await Todo.find();
    console.log("Todo.find:", allTodos, "\n");

    // find todo by title
    const todoByTitle = await Todo.find({ title: /Learn/ });
    console.log("Todo.find by title:", todoByTitle, "\n");

    // find the first todo matching the condition
    const firstTodo = await Todo.findOne({ title: /Todo/ });
    console.log("Todo.findOne:", firstTodo, "\n");

    // find todo by id
    const todoById = await Todo.findById(createTodoResult._id);
    console.log("Todo.findById:", todoById, "\n");

    // update todo by id
    const updateTodoResult = await Todo.findByIdAndUpdate(
      createTodoResult._id,
      { completed: true },
      { new: true }
    );
    console.log("Todo.findByIdAndUpdate:", updateTodoResult, "\n");

    // delete todo by id
    const deleteTodoResult = await Todo.findByIdAndDelete(createTodoResult._id);
    console.log("Todo.findByIdAndDelete:", deleteTodoResult, "\n");

    // select only title of todos, 3 ways
    const selectTitleOfTodos1 = await Todo.find({}, "title");
    console.log('Todo.find({}, "title"):', selectTitleOfTodos1, "\n");

    const selectTitleOfTodos2 = await Todo.find({}, { title: 1 });
    console.log("Todo.find({}, { title: 1 }):", selectTitleOfTodos2, "\n");

    const selectTitleOfTodos3 = await Todo.find({}).select("title");
    console.log('Todo.find({}).select("title"):', selectTitleOfTodos3, "\n");

    // exclude _id and __v from result, 3 ways
    const excludeIdAndV1 = await Todo.find({}, "-_id -__v");
    console.log('Todo.find({}, "-_id -__v"):', excludeIdAndV1, "\n");

    const excludeIdAndV2 = await Todo.find({}, { _id: 0, __v: 0 });
    console.log("Todo.find({}, { _id: 0, __v: 0 }):", excludeIdAndV2, "\n");

    const excludeIdAndV3 = await Todo.find({}).select("-_id -__v");
    console.log('Todo.find({}).select("-_id -__v"):', excludeIdAndV3, "\n");

    // typo when creating todo
    const createTodoTypo = await Todo.create({ titl: "Learn MongoDB" });
    console.log("Todo.create with typo:", createTodoTypo, "\n");
  } catch (error) {
    console.error(error);
  } finally {
    await mongoose.disconnect();
  }
})();
