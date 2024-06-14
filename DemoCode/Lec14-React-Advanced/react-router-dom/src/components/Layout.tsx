import { Outlet } from "react-router-dom";
import Nav from "./Nav";

const Layout = () => {
  return (
    <>
      <Nav /> {/* <Nav /> is visible thorughout our nested routes */}
      <Outlet />
      {/* <Outlet /> is a placeholder for Child Routes. When present, Child Routes become available to access thorugh the <Outlet /> */}
    </>
  );
};

export default Layout;
