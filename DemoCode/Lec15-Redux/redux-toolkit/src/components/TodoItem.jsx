import { useDispatch, useSelector } from 'react-redux';

import { toggleTodo, deleteTodo } from '../store/todoSlice/todo.slice';
// // using normal selectors
import { selectTodoById } from '../store/todoSlice/todo.selectors';

// // using selector provided by entity adapter
// import { selectTodoById } from '../store/todoSlice/todo.slice';

const TodoItem = ({ id }) => {
  // // using normal selectors
  const todo = useSelector(selectTodoById(id));

  // // using selector provided by entity adapter
  // const todo = useSelector((state) => selectTodoById(state, id));

  const dispatch = useDispatch();

  const handleToggle = () => {
    // // using normal reducer function
    dispatch(toggleTodo(id));

    // // using reducer provided by entity adapter
    // dispatch(
    //   toggleTodo({
    //     id,
    //     changes: {
    //       completed: !todo.completed,
    //     },
    //   }),
    // );
  };

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <tr>
      <td>{todo.title}</td>
      <td>
        <button onClick={handleToggle}>{todo.completed ? 'Yes' : 'No'}</button>
      </td>
      <td>
        <button onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
};

export default TodoItem;
