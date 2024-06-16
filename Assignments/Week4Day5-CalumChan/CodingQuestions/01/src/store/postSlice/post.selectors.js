import { createSelector } from "@reduxjs/toolkit";

const selectPostState = (state) => state.post;

// Auto Memoized
export const selectPosts = createSelector(selectPostState, (posts) =>
  Object.keys(posts)
);

export const selectPostById = (id) =>
  createSelector(selectPostState, (posts) => posts[id]);
