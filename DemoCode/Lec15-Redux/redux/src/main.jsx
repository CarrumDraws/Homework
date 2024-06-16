import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { Provider } from "react-redux";
import store from "./store/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Provider wraps our app and shares our store to the children */}
    {/* Uses the Context API under the hood*/}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
