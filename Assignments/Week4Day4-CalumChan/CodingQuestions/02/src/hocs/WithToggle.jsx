import { useState, useEffect } from "react";
import useFetcher from "../hooks/useFetcher";

// HOC's return functions!
const WithToggle = (WrappedComponent) => {
  // Return inner component with added functionalities
  return function WithToggleComponent() {
    const [data] = useFetcher();
    const [collapsed, setCollapsed] = useState(true);

    useEffect(() => {
      console.log(collapsed);
    }, [collapsed]);

    useEffect(() => {
      if (data.length === 0) return;
      console.log(data);
    }, [data]);
    return (
      <>
        <div>{`// ${collapsed ? "Collapsed" : "Expanded"} Mode`}</div>
        <WrappedComponent data={collapsed ? data.slice(0, 3) : data} />
        <button
          onClick={() => {
            setCollapsed((prev) => !prev);
          }}
        >
          {collapsed ? "See More" : "See Less"}
        </button>
      </>
    );
  };
};

export default WithToggle;
