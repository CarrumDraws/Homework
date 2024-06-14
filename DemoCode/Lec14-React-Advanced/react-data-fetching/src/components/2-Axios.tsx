import { useState, useEffect } from "react";
import { Todo } from "../types/Todo";

import axios from "../interceptors/auth.interceptor"; // Import Axios with interceptors
//import axios from 'axios'; // Import Axios withput interceptors

const Axios = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    axios
      .get("https://jsonplaceholder.typicode.com/todos", { signal })
      .then((response) => setTodos(response.data.slice(0, 5)))
      // Instead of doing response.json() => data, access data directly with response.data
      .catch((error) => console.error(error));

    return () => controller.abort();
  }, []);

  return (
    <>
      <h1>Axios</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.title}</td>
              <td>{todo.completed ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Axios;
