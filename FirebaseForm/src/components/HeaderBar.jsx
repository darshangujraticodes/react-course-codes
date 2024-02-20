import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./ComponentStyles.css";

function HeaderBar() {
  return (
    <div className="header-wrap text-center py-4 ">
      <NavLink to="" className="menu-link">
        Home
      </NavLink>

      <NavLink to="/firebase-crud" className="menu-link">
        Firebase CRUD
      </NavLink>

      <NavLink to="/login" className="menu-link">
        Login
      </NavLink>

      <NavLink to="/register" className="menu-link">
        Register
      </NavLink>

      <NavLink to="/working-form" className="menu-link">
        Working Form
      </NavLink>

      <NavLink to="/reacthook-form" className="menu-link">
        React Hook Form Practice
      </NavLink>
    </div>
  );
}

export default HeaderBar;
