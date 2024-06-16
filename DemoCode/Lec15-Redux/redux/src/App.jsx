import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { selectIsLoggedIn } from "./store/selectors/user.selectors";
import { loginAction } from "./store/actions/user.actions";

import TodoContainer from "./components/TodoContainer";

import "./App.css";

function App() {
  const isLoggedIn = useSelector(selectIsLoggedIn); // Extracts/selects data from Store using Selector Function

  const dispatch = useDispatch(); // dispatch takes in action + payload

  useEffect(() => {
    dispatch(loginAction());
  }, [dispatch]);

  return <>{isLoggedIn ? <TodoContainer /> : <h1>Not Logged In</h1>}</>;
}

export default App;
