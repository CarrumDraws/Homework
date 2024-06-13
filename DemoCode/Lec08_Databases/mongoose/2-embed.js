const mongoose = require("mongoose");

// one-to-one relationship
const oneToOne = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  todo: {
    title: String,
    completed: { type: Boolean, default: false },
  },
});

// one-to-many relationship
const oneToMany = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  todos: [
    {
      title: String,
      completed: { type: Boolean, default: false },
    },
  ],
});

// many-to-many relationship
const manyToMany = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  todos: [
    {
      title: String,
      completed: { type: Boolean, default: false },
      users: [
        {
          name: String,
          email: String,
          password: String,
        },
      ],
    },
  ],
});
