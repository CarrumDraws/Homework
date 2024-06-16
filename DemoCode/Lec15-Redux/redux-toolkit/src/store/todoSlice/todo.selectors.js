import { createSelector } from "@reduxjs/toolkit";

const selectTodoState = (state) => state.todo;

// Auto Memoized
export const selectTodoIds = createSelector(selectTodoState, (todos) =>
  Object.keys(todos)
);

export const selectTodoById = (id) =>
  createSelector(selectTodoState, (todos) => todos[id]);
