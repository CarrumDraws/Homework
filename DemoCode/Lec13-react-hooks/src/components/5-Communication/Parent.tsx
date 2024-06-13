import { useState } from "react";

import Child from "./Child";

const Parent = () => {
  const [count, setCount] = useState<number>(0);

  // Callback that updates the state
  const increment = (): void => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <h1>Parent</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Parent Increment</button>

      <Child
        count={count} // Pass count state
        increment={increment} // Pass increment()/setCount() to child
      />
    </>
  );
};

export default Parent;
