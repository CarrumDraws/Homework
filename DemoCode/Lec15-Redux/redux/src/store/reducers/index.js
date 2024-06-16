import { combineReducers } from "redux";

import todoReducer from "./todo.reducer";
import userReducer from "./user.reducer";

// A slice is a controlled "section" of your state
// It is a combination of the State, Reducers, and Selectors.
// Each Reducer controlls a slice
// However, the Redux Store accepts only one reducer!
// Combine them with combineReducers().

const rootReducer = combineReducers({
  todo: todoReducer, // When accessing state with selectors, use 'state.todo'
  user: userReducer, // ...or 'state.user'
});

export default rootReducer;
