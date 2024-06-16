import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';

import { useDispatch } from 'react-redux';

import { addTodo } from '../store/todoSlice/todo.slice';

const TodoForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title) {
      return;
    }

    // // using normal reducer function
    dispatch(addTodo(title));

    // // using reducer provided by entity adapter
    // dispatch(addTodo({ id: nanoid(), title, completed: false }));

    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='New Todo Title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type='submit'>Add Todo</button>
    </form>
  );
};

export default TodoForm;
