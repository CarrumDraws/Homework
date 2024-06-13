import { createContext } from "react";

export type CountContextType = {
  count: number;
  increment(): void;
  decrement(): void;
};

// the returned countContext will be exported and reused, we need the countContext.Provider wrapper component, and we also need the countContext itself for the useContext() hook
export const countContext = createContext<CountContextType>({
  count: 0,
  increment: () => {
    return null;
  },
  decrement: () => {
    return null;
  },
});
