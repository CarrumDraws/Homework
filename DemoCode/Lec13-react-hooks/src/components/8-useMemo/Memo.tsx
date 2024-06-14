import { useMemo, useState, useCallback } from "react";

const Memo = () => {
  const [num, setNum] = useState<number>(0);

  const [randomChange, setRandomChange] = useState<number>(Math.random()); // Trigger Rerenders

  const fibonacci = (n: number): number => {
    if (n < 2) {
      return n;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  };

  // const value = fibonacci(num); // Recalculates on rerender, even if num is the same

  // useCallback memoizes the function reference, ensuring it remains the same throughout rerenders
  // const fibonacciCallback = useCallback<(n: number) => number>(fibonacci, []); // Same as above
  // const value = fibonacciCallback(num);

  // This memoizes the result of the computation. On rerender, it doesnt recompute if num is the same!
  // (only memoizes the previously calculated value)
  const value = useMemo<number>(() => fibonacci(num), [num]); // If num is the same, doesn't recalculate on rerender!
  // Note: Don't add fibonacci as a dependency in the dependency array! Fibonacci() will be recreated on every render, defeating the purpose of useMemo- unless you use useCallback()

  return (
    <>
      <h1>useMemo</h1>
      <p>Fibonacci Result: {value}</p>
      <input
        type="number"
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
