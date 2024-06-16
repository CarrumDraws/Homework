import { useDispatch, useSelector } from "react-redux";

import {
  deleteTodoAction,
  toggleTodoAction,
} from "../store/actions/todo.actions";
import { selectTodoById } from "../store/selectors/todo.selectors";

const TodoItem = ({ id }) => {
  const todo = useSelector(selectTodoById(id));

  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodoAction(id));
  };

  const handleDelete = () => {
    dispatch(deleteTodoAction(id));
  };

  return (
    <tr>
      <td>{todo.title}</td>
      <td>
        <button onClick={handleToggle}>{todo.completed ? "Yes" : "No"}</button>
      </td>
      <td>
        <button onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
};

export default TodoItem;
