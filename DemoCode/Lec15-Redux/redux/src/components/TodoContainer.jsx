import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { initTodoAction, initTodoThunk } from "../store/actions/todo.actions";
import {
  selectTodoIds,
  selectTodoIdsByTitle,
} from "../store/selectors/todo.selectors";

import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

import { v4 as uuid } from "uuid";

const TodoContainer = () => {
  // if not using search feature
  // const todoIds = useSelector(selectTodoIds);

  // if using search feature
  const [title, setTitle] = useState("");
  // selectTodoIdsByTitle isn't memoized, leading to unnecessary rerenders...
  const todoIds = useSelector(selectTodoIdsByTitle(title));

  const dispatch = useDispatch();

  useEffect(() => {
    // Add our own todos...
    // const todos = [
    //   { id: uuid(), title: "Title 1", completed: false },
    //   { id: uuid(), title: "Title 2", completed: true },
    //   { id: uuid(), title: "Title 3", completed: false },
    //   { id: uuid(), title: "Title 4", completed: true },
    // ];
    // dispatch(initTodoAction(todos));

    // ... or use Thunk to load todos from API!
    dispatch(initTodoThunk());
  }, [dispatch]);

  return (
    <>
      <TodoForm />
      <input
        type="text"
        placeholder="Search Todos"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ marginBottom: "1rem" }}
      />
      <br />
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
