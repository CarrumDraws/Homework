import { Suspense, lazy } from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";

import Guard from "./components/Guard";

const Profile = lazy(() => import("./pages/Profile"));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Child Routes unavailable unless parent element has <Outlet /> */}
          <Route
            index // 'index' prop = this is the default route
            element={<Home />}
          />

          <Route element={<Guard />}>
            {/* Nested Route protected by <Guard /> */}
            <Route
              path="profile/:username"
              element={
                <Suspense fallback={<h1>Loading...</h1>}>
                  <Profile />
                </Suspense>
              }
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
