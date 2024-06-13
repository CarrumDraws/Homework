import { useMemo, useState, useCallback } from 'react';

const Memo = () => {
  const [num, setNum] = useState<number>(0);
  // // this randomChange state is just for triggering re-renders
  const [randomChange, setRandomChange] = useState<number>(Math.random());

  const fibonacci = (n: number): number => {
    if (n < 2) {
      return n;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  };

  // //  without useMemo(), component takes a long time to re-render if the calculation is expensive
  const value = fibonacci(num);

  // const fibonacciCallback = useCallback<(n: number) => number>(fibonacci, []);

  // // if you enable eslint, it will warn you that you need to put fibonacci as a dependency in the dependency array, but if we put fibonacci inside, useMemo() won't have any benefits anymore because this function will be recreated with a different reference for every re-render, and useMemo() will think the dependency changed, to solve this, see useCallback()
  // // It only memoizes the previously calculated value.
  // const value = useMemo<number>(() => fibonacci(num), [num]);

  return (
    <>
      <h1>useMemo</h1>
      <p>Fibonacci Result: {value}</p>
      <input
        type='number'
        value={num}
        onChange={(e) => setNum(Number(e.target.value))}
      />
      <p>Random Change: {randomChange}</p>
      <button onClick={() => setRandomChange(Math.random())}>
        Random Change
      </button>
    </>
  );
};

export default Memo;
