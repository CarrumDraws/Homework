import { configureStore } from "@reduxjs/toolkit";

import todoReducer from "./todoSlice/todo.slice";
import userReducer from "./userSlice/user.slice";

// Use configureStore instead of createStore
const store = configureStore({
  // Don't use combineReducers
  reducer: {
    todo: todoReducer,
    user: userReducer,
  },
  devTools: true, // devTools toggle!
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(), // Has Thunk middleware by default
});

export default store;
