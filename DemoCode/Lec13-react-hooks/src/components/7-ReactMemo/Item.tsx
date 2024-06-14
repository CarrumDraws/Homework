import { useEffect, memo } from "react";

type Props = {
  value: number;
};

const Item = ({ value }: Props) => {
  useEffect(() => {
    console.log("Item " + value + " Rerendered");
  });

  return <h1>Item {value}</h1>;
};

// export default Item;

// instead of directly exporting the component, we can export memo(Component), use the Profiler tool in the browser to check the component re-render
const MemoItem = memo(Item);
export default MemoItem;
