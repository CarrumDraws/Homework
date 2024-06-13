/* eslint-disable @typescript-eslint/no-unused-vars */
import "./App.css";

import ClassProps from "./components/2-ClassProps";
import FunctionalProps from "./components/3-FunctionalProps";
import State from "./components/3-State";
import Ref from "./components/4-Ref";
import Uncontrolled from "./components/5-Uncontrolled";
import Controlled from "./components/6-Controlled";
import ReusableChangeHandler from "./components/7-ReusableChangeHandler";
import LifeCycle from "./components/8-LifeCycle";
import Exercise from "./components/9-Exercise";

function App() {
  return (
    <>
      {/* <ClassProps
        strProp={"String Prop"}
        numProp={2}
        arrProp={[1, 2, 3, 4, 5]}
        objProp={{ a: "a", b: [1, 2, 3] }}
      /> */}

      {/* <FunctionalProps
        strProp={"String Prop"}
        numProp={2}
        arrProp={[1, 2, 3, 4, 5]}
        objProp={{ a: "a", b: [1, 2, 3] }}
      /> */}

      {/* <State /> */}

      {/* <Ref /> */}

      {/* <Uncontrolled /> */}

      {/* <Controlled /> */}

      {/* <ReusableChangeHandler /> */}

      {/* <LifeCycle /> */}

      <Exercise />
    </>
  );
}

export default App;
