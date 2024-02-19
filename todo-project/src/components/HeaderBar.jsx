import React from "react";
import { Link, NavLink } from "react-router-dom";

function HeaderBar() {
  return (
    <>
      <div className="header-wrapper text-center text-2xl my-5">
        <Link to="/" className="mx-3">
          Home
        </Link>
        <Link to="/login" className="mx-3">
          Login
        </Link>
        <Link to="/register" className="mx-3">
          Register
        </Link>
      </div>
    </>
  );
}

export default HeaderBar;
