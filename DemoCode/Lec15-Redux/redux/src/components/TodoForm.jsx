import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoAction } from "../store/actions/todo.actions";
import { v4 as uuid } from "uuid";

const TodoForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title) {
      return;
    }

    const newTodo = {
      id: uuid(),
      title,
      completed: false,
    };

    dispatch(addTodoAction(newTodo));

    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="New Todo Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
