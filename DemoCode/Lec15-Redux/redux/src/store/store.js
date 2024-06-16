import { legacy_createStore as createStore } from "redux";
import { applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

// Enables Redux devtools
import { composeWithDevTools } from "@redux-devtools/extension";

import rootReducer from "./reducers";

// Regular Store ------
// createStore(reducer, initialState, enhancer);
// InitialState here is undefined. Default state is defined in reducers
// const store = createStore(rootReducer, {}, composeWithDevTools());

// Store with Thunk Middleware ------
// Enables our Action Creators to return Thunks instead of Action objects...
// ...and injects them with 'dispatch' and 'getState' for Store interaction
const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

// Generic Action creator
// Passing Payload is optional
export const createAction = (type, payload) => ({ type, payload });

export default store;
