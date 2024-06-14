import { Outlet } from "react-router-dom";

// Protected Route Component
const Guard = () => {
  const isLoggedIn = true;

  // <Outlet /> is a placeholder for Child Routes. When present, Child Routes become available to access.
  return isLoggedIn ? <Outlet /> : <h1>You are not logged in</h1>;
};

export default Guard;
