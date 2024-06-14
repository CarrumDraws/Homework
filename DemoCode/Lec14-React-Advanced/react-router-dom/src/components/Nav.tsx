import { NavLink } from "react-router-dom";

import "./Nav.css";

const Nav = () => {
  const username = "Will";
  return (
    <nav>
      <button>
        <NavLink to="/">Home</NavLink>
      </button>
      <button>
        <NavLink to={`/profile/${username}`}>Profile</NavLink>
      </button>
    </nav>
  );
};

export default Nav;
