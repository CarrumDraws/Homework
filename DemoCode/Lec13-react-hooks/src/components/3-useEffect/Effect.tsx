import { useEffect, useState } from "react";

const Effect = () => {
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [addNum, setAddNum] = useState<number>(1);

  useEffect(
    (): (() => void) => {
      console.log("Effect");

      // can be used to compute new values based on other state changes
      // if (addNum < 10) {
      //   console.log(addNum);
      //   setAddNum(addNum + 1);
      // }

      return () => console.log("Effect Return");
    }
    // no dependency array -> componentDidMount + componentDidUpdate - listen for all prop/state changes

    // [] // empty dependency array -> componentDidMount

    // [num1] // dependencies in array -> componentDidMount + componentDidUpdate - listen only for dependency changes
  );

  // can be used to fetch data when the component is initially mounted
  // useEffect((): void => {
  //   fetch("https://jsonplaceholder.typicode.com/todos/1")
  //     .then((response) => response.json())
  //     .then(
  //       (data: {
  //         id: number;
  //         userId: number;
  //         title: string;
  //         completed: boolean;
  //       }) => console.log(data)
  //     );
  // }, []);

  // // can be used to setup timers and event listeners when the component is initially mounted
  // useEffect((): (() => void) | void => {
  //   const interval = setInterval(() => {
  //     console.log('Interval');
  //   }, 1000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  return (
    <>
      <h1>useEffect</h1>
      <p>Num1: {num1}</p>
      <p>Squared Num1: {addNum}</p>
      <p>Num2: {num2}</p>
      <button onClick={() => setNum1((prevNum) => prevNum + 1)}>
        Increment1
      </button>
      <button onClick={() => setNum2((prevNum) => prevNum + 1)}>
        Increment2
      </button>
    </>
  );
};

export default Effect;
