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

// Reducer function is a pure function- they don't cause side effects!
// State is immutable- don't update the state, returna new one.
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "SET_NAME":
      return { ...state, person: { ...state.person, name: action.payload! } };
    case "RESET":
      return init(initialState); // Reinitialize the state
    default:
      throw new Error();
    // return state; // or this!
  }
};

// Initial State- not finished yet! Use init() function.
const initialState: InitialState = {
  count: 0,
  person: {
    name: "John",
  },
};

// Optional function that initializes the state
// Used when initial state requires extra processing before it is set
const init = (initialState: InitialState): State => {
  return { ...initialState, color: "red" }; // Add extra "color" property
};

const Reducer = () => {
  // state: current state of the component
  // dispatch: function that sends actions to the reducer
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
