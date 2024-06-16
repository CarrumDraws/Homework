import { ADD_TODO, DELETE_TODO, INIT_TODO, TOGGLE_TODO } from "../constants";

const initialState = {};

// Store passes in current state and action as input
// If the current state isn't initialized (like this demo), it defaults to initialState
const todoReducer = (state = initialState, action) => {
  Object.freeze(state); // Object.freeze() makes an object static and immutable.
  // Prevents us from accidentally mutating the state

  const { type, payload } = action;

  // (Todo structure for reference)
  // const Todo = {
  //   id: uuid(),
  //   title :title,
  //   completed: false,
  // };

  switch (type) {
    // Payload = Todo Array
    // Convert Todo Array into Todo Object, with 'id' as the key
    case INIT_TODO: {
      return payload.reduce((acc, cur) => {
        acc[cur.id] = cur;
        return acc;
      }, {});
    }

    // Payload = Todo Object
    // Using the todo's ID, adds the new Todo as a key to Todos
    case ADD_TODO: {
      return {
        ...state,
        [payload.id]: payload,
      };
    }

    // Payload = Todo id
    // Just toggles the 'completed' property
    case TOGGLE_TODO: {
      return {
        ...state,
        [payload]: { ...state[payload], completed: !state[payload].completed },
      };
    }

    // Payload = Todo id
    // Remove the property with key 'id' from the state
    case DELETE_TODO: {
      const stateCopy = { ...state };
      delete stateCopy[payload];
      return stateCopy;
    }

    // Action didn't match any cases: don't change state
    default: {
      return state;
    }
  }
};

export default todoReducer;
