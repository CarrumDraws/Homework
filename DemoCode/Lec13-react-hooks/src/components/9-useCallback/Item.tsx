import { useEffect, memo } from "react";

type Props = {
  value: number;
  increment(): void;
};

const Item = ({ value, increment }: Props) => {
  useEffect(() => {
    console.log("Item Rerendered");
  });
  return (
    <>
      <h1>Item {value}</h1>
      {/* Just to display the function definition */}
      <p>{`${increment}`}</p>
    </>
  );
};

const MemoItem = memo(Item);
export default MemoItem;
