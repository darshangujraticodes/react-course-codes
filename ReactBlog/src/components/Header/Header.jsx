import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="sticky bg-[#f5f5f5]">
        <div className="header-wrapper container-section py-4 ">
          <nav className="flex justify-between">
            <div className="img-wrap">
              <h3 className="text-3xl text-black font-bold">LOGO</h3>
            </div>
            <div className="header-navlink   ">
              <ul className="flex text-lg pt-1 text-black">
                <li className="mx-3 font-semibold">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className="mx-3 font-semibold">Blog</li>
                <li className="mx-3 font-semibold">Login</li>
                <li className="mx-3 font-semibold">SignUp</li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;
