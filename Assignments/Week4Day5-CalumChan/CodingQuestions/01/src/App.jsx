import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectIsLoggedIn } from "./store/userSlice/user.slice";
import { login } from "./store/userSlice/user.slice";
import "./App.css";

import PostContainer from "./components/PostContainer";

function App() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(login());
  }, [dispatch]);

  return <>{isLoggedIn ? <PostContainer /> : <h1>Not Logged In</h1>}</>;
}

export default App;
