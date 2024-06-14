import { useState } from "react";
import { countContext, CountContextType } from "./CountContext";

type Props = {
  children: React.ReactNode;
};

const CountProvider = ({ children }: Props) => {
  const [count, setCount] = useState<number>(0);

  const increment = (): void => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = (): void => {
    setCount((prevCount) => prevCount - 1);
  };

  // All data/functions here
  const value: CountContextType = {
    count,
    increment,
    decrement,
  };

  return (
    // Wrap Provider around children
    <countContext.Provider value={value}>{children}</countContext.Provider>
  );
};

export default CountProvider;
