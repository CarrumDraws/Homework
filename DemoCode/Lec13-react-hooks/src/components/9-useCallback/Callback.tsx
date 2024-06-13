import { useState, useCallback } from 'react';

import MemoItem from './Item';

const arr = [1, 2, 3];

const Callback = () => {
  const [count, setCount] = useState<number>(0);

  const increment = (): void => {
    setCount((prevCount) => prevCount + 1);
  };

  // const increment = useCallback<() => void>((): void => {
  //   setCount((prev) => prev + 1);
  // }, [setCount]);

  return (
    <>
      <h1>Callback</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>

      {arr.map((item) => (
        <MemoItem
          key={item}
          value={item}
          increment={increment}
        />
      ))}
    </>
  );
};

export default Callback;
