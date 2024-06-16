import { createSlice, nanoid } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post", // Slice Name
  initialState: {},
  reducers: {
    addPost: (state, action) => {
      const id = nanoid();
      state[id] = {
        id,
        userId: action.payload.userId,
        title: action.payload.title,
        body: action.payload.body,
      };
    },
    editPost: (state, action) => {
      state[action.payload.id] = {
        id: action.payload.id,
        userId: action.payload.userId,
        title: action.payload.title,
        body: action.payload.body,
      };
    },
    deletePost: (state, action) => {
      delete state[action.payload];
    },
  },
});

export const { addPost, editPost, deletePost } = postSlice.actions;

export default postSlice.reducer;
