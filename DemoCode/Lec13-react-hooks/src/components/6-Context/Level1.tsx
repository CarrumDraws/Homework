import { useContext } from 'react';
import { countContext, CountContextType } from './CountContext';
import Level2 from './Level2';

const Level1 = () => {
  const { count, increment, decrement } =
    useContext<CountContextType>(countContext);

  return (
    <>
      <h1>Parent</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Parent Increment</button>
      <button onClick={decrement}>Parent Decrement</button>

      <Level2 />
    </>
  );
};

export default Level1;
