// Selectors select specific state from the Store + returns it
// Store injects selectors with 'state'

// Note: state is an object of {id: { Todo }}
export const selectTodoIds = (state) => Object.keys(state.todo);

// Use Currying to utilize argument 'id' in the manipulation of 'store'
export const selectTodoById = (id) => (state) => state.todo[id];

export const selectTodoIdsByTitle = (title) => (state) => {
  const filteredTodos = Object.values(state.todo)
    .filter((todo) => todo.title.toLowerCase().includes(title))
    .map((todo) => todo.id);

  return filteredTodos;
};
