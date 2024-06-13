import { useContext } from 'react';
import { countContext, CountContextType } from './CountContext';

const Level3 = () => {
  const { count, increment, decrement } =
    useContext<CountContextType>(countContext);

  return (
    <>
      <h1>Grandchild</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Grandchild Increment</button>
      <button onClick={decrement}>Grandchild Decrement</button>
    </>
  );
};

export default Level3;
