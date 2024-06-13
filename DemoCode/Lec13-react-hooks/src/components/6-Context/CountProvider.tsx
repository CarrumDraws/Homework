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

  // // enclose all data that we want to share in a single object
  const value: CountContextType = {
    count,
    increment,
    decrement,
  };

  return (
    // // we use context.Provider and pass in the values we want to share to it's children components
    <countContext.Provider value={value}>{children}</countContext.Provider>
  );
};

export default CountProvider;
