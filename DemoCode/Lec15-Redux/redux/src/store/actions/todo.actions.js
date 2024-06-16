import axios from "axios";

import { ADD_TODO, DELETE_TODO, INIT_TODO, TOGGLE_TODO } from "../constants";
import { createAction } from "../store";

import { v4 as uuid } from "uuid";

// Actions that utilize our createAction Function
export const initTodoAction = (todos) => createAction(INIT_TODO, todos);

export const addTodoAction = (todo) => createAction(ADD_TODO, todo);

export const toggleTodoAction = (id) => createAction(TOGGLE_TODO, id);

export const deleteTodoAction = (id) => createAction(DELETE_TODO, id);

// Action Creator that returns a Thunk
// Returns a Function instead of an action!
// This function can perform async operations / handle complex synchronous logic
export const initTodoThunk = () => {
  // This returned function is our Thunk
  // This Thunk performs async operations, so it's a Promise!
  // 'dispatch' and 'getState' is injected by the Redux Thunk Middleware
  return async (dispatch, getState) => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    const todos = data.slice(0, 4).map((todo) => {
      delete todo.userId;
      todo.id = uuid();
      return todo;
    });
    dispatch(initTodoAction(todos));
  };
};
