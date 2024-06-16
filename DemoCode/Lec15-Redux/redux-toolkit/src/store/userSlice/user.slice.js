import { createSlice } from "@reduxjs/toolkit";

// A Slice is a combination of the State, Reducers, and Selectors.
// createSlice() combines these into one!
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
    // you can also define simple selectors directly in the slice
    selectIsLoggedIn: (state) => state.isLoggedIn,
  },
});

// Actions auto-generated: Type is same as the reducer name!
export const { login, logout } = userSlice.actions;
export const { selectIsLoggedIn } = userSlice.selectors;

export default userSlice.reducer;
