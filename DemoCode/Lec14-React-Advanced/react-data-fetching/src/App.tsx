import "./App.css";

import Fetch from "./components/1-Fetch";
import Axios from "./components/2-Axios";
import CustomHook from "./components/3-CustomHook";

import TodoTableWithHOC from "./components/4-TodoTableWithHOC";

function App() {
  return (
    <>
      {/* <Fetch /> */}

      {/* <Axios /> */}

      <CustomHook />

      {/* <TodoTableWithHOC url={'https://jsonplaceholder.typicode.com/todos'} /> */}
    </>
  );
}

export default App;
