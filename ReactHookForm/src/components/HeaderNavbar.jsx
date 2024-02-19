import React from "react";
import { Link, NavLink } from "react-router-dom";

function HeaderNavbar() {
  return (
    <>
      <div className="navbar-wrapper py-5 text-center bg-[#f5f5f5] shadow-lg w-full sticky top-0 z-30">
        <nav className=" text-xl   ">
          <ul className="flex justify-center uppercase font-semibold ">
            <li className="mx-3">
              <NavLink to="/"> Home </NavLink>
            </li>
            <li className="mx-3">
              <NavLink to="/simple-form"> Simple Form </NavLink>
            </li>
            <li className="mx-3">
              <NavLink to="/react-hook-form">react Hook Form</NavLink>
            </li>
            <li className="mx-3">
              <NavLink to="/firebase-form">Firebase Form</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default HeaderNavbar;
