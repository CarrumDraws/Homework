import { useReducer } from "react";

type State = Readonly<{
  count: number;
  person: Person;
  color: string;
}>;

type InitialState = Pick<State, "count" | "person">;

type Person = {
  name: string;
};

type Action = {
  type: "INCREMENT" | "DECREMENT" | "SET_NAME" | "RESET";
  payload?: string;
};

// reducer function to be passed into the useReducer hook, must be pure function
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "SET_NAME":
      return { ...state, person: { ...state.person, name: action.payload! } };
    case "RESET":
      // utilize the init() function we defined to re-initilize our state
      return init(initialState);
    default:
      throw new Error();
    // or
    // return state;
  }
};

// initial state for the useReducer hook
const initialState: InitialState = {
  count: 0,
  person: {
    name: "John",
  },
};

// optional init() function to be passed into the useReducer hook, useful if you initial state needs heavy computation
const init = (initialState: InitialState): State => {
  return { ...initialState, color: "red" };
};

const Reducer = () => {
  // // state is the entire state, dispatch is a function that is used to send actions to the reducer function
  const [state, dispatch] = useReducer(reducer, initialState, init);

  return (
    <>
      <h1>useReducer</h1>
      <p>Count: {state.count}</p>
      <p>Name: {state.person.name}</p>
      <p>Color: {state.color}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "SET_NAME", payload: "Mary" })}>
        Change Name
      </button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </>
  );
};

export default Reducer;
