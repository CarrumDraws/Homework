import { useState } from 'react';

import Item from './Item';

const arr = [1, 2, 3];

const ReactMemo = () => {
  const [count, setCount] = useState<number>(0);

  const increment = (): void => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <h1>React.Memo</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>

      {arr.map((item) => (
        <Item
          key={item}
          value={item}
        />
      ))}
    </>
  );
};

export default ReactMemo;
