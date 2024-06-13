import { useState } from "react";

import "./App.css";

// Implement a Simple Calculator App with 6 buttons (1,2,3, +,-,=) and an input field. After the
// user presses ‘=’, all the buttons should be disabled.
// Example1: When the user press ‘1’, then ‘+’, then ‘3’, the input field should display ‘1+3’, then
// the user press ‘=’, the input field should display ‘4’
// Example2: When the user press ‘1’, then ‘1’, then ‘-’, then ‘2’, the input field should display
// ‘11-2, then the user press ‘=’, the input field should display ‘9’
// Example3: When the user press ‘1’, then ‘-’, then ‘2’, then ‘+’, then ‘3’, the input field should
// display ‘1-2+3, then the user press ‘=’, the input field should display ‘2’

function App() {
  const [calc, setCalc] = useState<string>("");

  // Calculates string as mathematical operation
  function handleCalc() {
    let strCpy: string = calc;
    let ret: number = 0;

    // get first num
    ret = parseInt(strCpy);
    strCpy = strCpy.slice(String(ret).length);

    // Calculate rest of string
    while (strCpy != "") {
      const opr: string = strCpy[0];
      strCpy = strCpy.slice(1);
      const num: number = parseInt(strCpy);
      strCpy = strCpy.slice(String(num).length);
      if (opr === "+") ret += num;
      else ret -= num;
    }
    setCalc(String(ret));
  }

  return (
    <div className="calculator">
      <div className="result">{calc}</div>
      <div className="row">
        <div onClick={() => setCalc(calc + "1")}>1</div>
        <div onClick={() => setCalc(calc + "2")}>2</div>
        <div onClick={() => setCalc(calc + "3")}>3</div>
      </div>
      <div className="row">
        <div onClick={() => setCalc(calc + "+")}>+</div>
        <div onClick={() => setCalc(calc + "-")}>-</div>
        <div onClick={() => handleCalc()}>=</div>
      </div>
    </div>
  );
}

export default App;
