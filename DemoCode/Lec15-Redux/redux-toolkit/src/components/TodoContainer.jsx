import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
// // using normal selectors
import { selectTodoIds } from "../store/todoSlice/todo.selectors";

// // using selector provided by entity adapter
// import { selectTodoIds } from '../store/todoSlice/todo.slice';

import { initTodoThunk } from "../store/todoSlice/todo.thunks";

import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

const TodoContainer = () => {
  const todoIds = useSelector(selectTodoIds);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initTodoThunk()); // Trigger Thunk
  }, [dispatch]);

  return (
    <>
      <TodoForm />
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Completed</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todoIds.map((id) => (
            <TodoItem key={id} id={id} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TodoContainer;
