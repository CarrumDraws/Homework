type Props = {
  count: number;
  increment(): void;
};

const Child = ({ count, increment }: Props) => {
  return (
    <>
      <h1>Child</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Child Increment</button>
    </>
  );
};

export default Child;
