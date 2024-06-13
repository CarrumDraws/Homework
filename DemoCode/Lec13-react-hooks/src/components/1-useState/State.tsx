import { useState } from "react";

const State = () => {
  // // normal variables won't trigger re-renders, and will be re-initialized after re-renders
  // let count = 0;
  // const increment = (): void => {
  //   console.log(++count);
  // };

  // const [stateName, setStateName] = useState<Type>(initialValue)
  const [count, setCount] = useState<number>(0);

  // const increment = (): void => {
  //   // cannot directly mutate state
  //   // count = count + 1;
  //   setCount(count + 2);
  // };

  // const increment = (): void => {
  //   // state updates are asynchronous, and React will batch multiple setState calls together
  //   setCount(count + 1);
  //   setCount(count + 1);
  // };

  const increment = (): void => {
    // recommended way of updating the state if new state depends on old state
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  };

  const [names, setNames] = useState<string[]>(["John", "Jane", "Joe"]);

  const addName = (): void => {
    // wrong! when state is a reference type, we must change the reference, otherwise React won't update our state and trigger re-renders
    // names.push("Jack");
    // setNames(names);

    // correct way of updating reference type state, create shallow/deep copies
    setNames((prevNames) => [...prevNames, "Jack"]);
  };

  return (
    <>
      <h1>useState</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <br />
      <br />
      <p>{names.join(", ")}</p>
      <button onClick={addName}>Add Name</button>
    </>
  );
};

export default State;
