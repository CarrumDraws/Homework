import { useState, useEffect } from "react";
import { Todo } from "../types/Todo";

const Fetch = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    // "controller" lets you to abort fetch requests
    const controller = new AbortController();
    // "signal" is used to communicate with the fetch request and abort it
    const signal = controller.signal;

    fetch("https://jsonplaceholder.typicode.com/todos", { signal })
      .then((response) => response.json())
      .then((data) => setTodos(data.slice(0, 5)))
      .catch((error) => console.error(error));

    // It is best practice to do this for EVERY SINGLE FETCH CALL.
    return () => controller.abort();
  }, []);

  return (
    <>
      <h1>Fetch</h1>
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

export default Fetch;
