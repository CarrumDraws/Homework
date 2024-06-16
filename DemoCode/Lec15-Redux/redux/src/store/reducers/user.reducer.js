import { LOGIN, LOGOUT } from "../constants";

const initialState = {
  isLoggedIn: false,
};

// Store passes in current state and action as input
// If the current state isn't initialized (like this demo), it defaults to initialState
const userReducer = (state = initialState, action) => {
  Object.freeze(state); // Object.freeze() makes an object static and immutable.
  // Prevents us from accidentally mutating the state

  const { type } = action;

  switch (type) {
    // (These actions have no payloads)
    case LOGIN: {
      // Return new state
      return {
        ...state,
        isLoggedIn: true,
      };
    }

    case LOGOUT: {
      return initialState;
    }

    // Action didn't match any cases: don't change state
    default: {
      return state;
    }
  }
};

export default userReducer;
