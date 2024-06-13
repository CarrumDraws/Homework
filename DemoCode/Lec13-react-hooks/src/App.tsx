import { lazy, Suspense } from "react";
import "./App.css";

import State from "./components/1-useState/State";
import Reducer from "./components/2-useReducer/Reducer";
import Effect from "./components/3-useEffect/Effect";
import Ref from "./components/4-useRef/Ref";
import Parent from "./components/5-Communication/Parent";

import CountProvider from "./components/6-Context/CountProvider";
import Level1 from "./components/6-Context/Level1";

import ReactMemo from "./components/7-ReactMemo/ReactMemo";
import Memo from "./components/8-useMemo/Memo";
import Callback from "./components/9-useCallback/Callback";

// lazy loading
const Lazy = lazy(() => import("./components/10-ReactLazy/Lazy"));
import Fallback from "./components/10-ReactLazy/Fallback";

function App() {
  return (
    <>
      {/* <State /> */}

      {/* <Reducer /> */}

      {/* <Effect /> */}

      {/* <Ref /> */}

      <Parent />

      <CountProvider>
        <Level1 />
      </CountProvider>

      {/* <ReactMemo /> */}

      {/* <Memo /> */}

      {/* <Callback /> */}

      {/* <Suspense fallback={<Fallback />}>
        <Lazy />
      </Suspense> */}
    </>
  );
}

export default App;
