import { createAsyncThunk, nanoid } from "@reduxjs/toolkit";

import axios from "axios";

export const initTodoThunk = createAsyncThunk(
  "todo/initTodoThunk", // Action Type
  async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );

    const todos = data.slice(0, 4).map((todo) => {
      delete todo.userId;
      todo.id = nanoid();
      return todo;
    });

    return todos; // Returned data is passed in as action.payload
  }
);
