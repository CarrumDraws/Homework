import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user", // Slice Name
  initialState: { isLoggedIn: false },
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
    },

    logout: (state) => {
      state.isLoggedIn = false;
    },
  },
  selectors: {
    selectIsLoggedIn: (state) => state.isLoggedIn,
  },
});

export const { login, logout } = userSlice.actions;
export const { selectIsLoggedIn } = userSlice.selectors;

export default userSlice.reducer;
