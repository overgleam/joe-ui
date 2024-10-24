import React from "react";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  const activeClassName = "text-blue-500";

  return (
    <header className="bg-gray-800 p-4">
      <nav className="container mx-auto flex space-x-4">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? activeClassName : "text-white"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? activeClassName : "text-white"
          }
        >
          About
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
