import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsLoggedIn } from './store/userSlice/user.slice';
import { login } from './store/userSlice/user.slice';
import './App.css';

import TodoContainer from './components/TodoContainer';

function App() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(login());
  }, [dispatch]);

  return <>{isLoggedIn ? <TodoContainer /> : <h1>Not Logged In</h1>}</>;
}

export default App;
