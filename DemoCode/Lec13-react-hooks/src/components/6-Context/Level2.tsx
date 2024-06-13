import { useContext } from 'react';
import { countContext, CountContextType } from './CountContext';
import Level3 from './Level3';

const Level2 = () => {
  const { count, increment, decrement } =
    useContext<CountContextType>(countContext);

  return (
    <>
      <h1>Child</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Child Increment</button>
      <button onClick={decrement}>Child Decrement</button>

      <Level3 />
    </>
  );
};

export default Level2;
