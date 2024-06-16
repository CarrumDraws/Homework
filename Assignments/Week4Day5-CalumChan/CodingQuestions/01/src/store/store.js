import { configureStore } from "@reduxjs/toolkit";

import postReducer from "./postSlice/post.slice";
import userReducer from "./userSlice/user.slice";

// Use configureStore instead of createStore
const store = configureStore({
  reducer: {
    user: userReducer,
    post: postReducer,
  },
  devTools: true, // devTools toggle!
});

export default store;
