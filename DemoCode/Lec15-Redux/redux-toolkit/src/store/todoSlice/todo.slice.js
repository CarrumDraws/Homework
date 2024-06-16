// import { createSlice, nanoid } from "@reduxjs/toolkit";

// import { initTodoThunk } from "./todo.thunks"; // Import Thunk

// // A Slice is a combination of the State, Reducers, and Selectors.
// // createSlice() combines these into one!
// const todoSlice = createSlice({
//   name: "todo", // Slice Name
//   initialState: {},
//   reducers: {
//     // These Reducers take in a Payload
//     addTodo: (state, action) => {
//       const id = nanoid();
//       state[id] = {
//         id,
//         title: action.payload,
//         completed: false,
//       };
//     },
//     toggleTodo: (state, action) => {
//       state[action.payload].completed = !state[action.payload].completed;
//     },
//     deleteTodo: (state, action) => {
//       delete state[action.payload];
//     },
//   },

//   // Handle actions defined outside the slice, like Thunks!
//   extraReducers: (builder) => {
//     // Three states of a Promise : .pending, .fufilled, .rejected
//     builder.addCase(
//       initTodoThunk.fulfilled, // (Just handles the "fufilled" state)
//       // Data returned by thunk is passed in as action.payload
//       (_state, action) => {
//         // This returned state replaces the old state
//         return action.payload.reduce((acc, cur) => {
//           acc[cur.id] = cur;
//           return acc;
//         }, {});
//       }
//     );
//   },
// });

// export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;

// export default todoSlice.reducer;

// EntityAdapters ----------------------------------------------------------
// Alternative to managing state manually- more concise!
import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { initTodoThunk } from "./todo.thunks";

// createEntityAdapter manages normalized data in the Redux store
// Normalization: data storage technique that avoids redundancy and improves efficiency
const todoAdaptor = createEntityAdapter({
  // Sort items by their 'completed' status
  sortComparer: (a, b) => +a.completed - +b.completed,
});

const todoSlice = createSlice({
  name: "todo",
  initialState: todoAdaptor.getInitialState(),
  reducers: {
    addTodo: todoAdaptor.addOne, // Utility Functions provided by createEntityAdapter
    toggleTodo: todoAdaptor.updateOne,
    deleteTodo: todoAdaptor.removeOne,
  },
  extraReducers: (builder) => {
    builder.addCase(initTodoThunk.fulfilled, (state, action) =>
      todoAdaptor.setAll(state, action.payload)
    );
  },
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;

export const { selectIds: selectTodoIds, selectById: selectTodoById } =
  todoAdaptor.getSelectors((state) => state.todo);

export default todoSlice.reducer;
