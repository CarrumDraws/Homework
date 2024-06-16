import { useRef, useEffect, useState } from "react";

const Ref = () => {
  // const inputRef = useRef<HTMLInputElement>(null);

  // useEffect(() => {
  //   console.log(inputRef.current);
  //   inputRef.current!.focus(); // Focus on render
  // }, []);

  // Use State + Refs to track previous state
  const [value, setValue] = useState<string>("");
  const prevRef = useRef<string>("");
  useEffect((): void => {
    prevRef.current = value;
  }, [value]);
  // EXPLINATION: When the 'value' state changes, it triggers a rerender + useEffect.
  // UseEffect then updates prevRef's value. However, ref updates don't trigger a rerender, so this update isn't reflected in the DOM.
  // The update to prevRef will show upon the next rerender, wether it be from setValue or something else.

  // Ref value persists across re-renders
  // Ref updates won't cause any re-renders
  const renderCount = useRef<number>(0);
  const [renderCnt, setRenderCnt] = useState<number>(0);
  useEffect(() => {
    renderCount.current = renderCount.current + 1; // Track Rerenders with Refs
    // setRenderCnt((prevRenderCnt) => prevRenderCnt + 1); // Not with state- Infinate Loop
  });

  return (
    <>
      <h1>useRef</h1>
      <p>Render Count: {renderCount.current}</p>
      <p>State Render Count: {renderCnt}</p>
      {/* <input
        ref={inputRef}
        type="text"
        placeholder="Ref Input"
        onChange={() => console.log(inputRef.current?.value)}
      /> */}
      <br />
      <input
        type="text"
        placeholder="State Input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <p>Current State Value: {value}</p>
      <p>Previous State Value(Ref): {prevRef.current}</p>
      <button
        onClick={() => {
          setRenderCnt((prevRenderCnt) => prevRenderCnt + 1);
        }}
      >
        Trigger Rerender
      </button>
    </>
  );
};

export default Ref;
