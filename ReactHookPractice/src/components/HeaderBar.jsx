import React from "react";
import { Link, NavLink } from "react-router-dom";

function HeaderBar() {
  return (
    <>
      <div className="header-wrapper bg-[#262626] text-white py-4 px-3">
        <div className="container mx-auto">
          <nav>
            <ul className="uppercase text-lg font-semibold flex flex-wrap font-sans t">
              <li className="mx-2">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="mx-2">
                <NavLink to="/usestate">UseState </NavLink>
              </li>
              <li className="mx-2">
                <NavLink to="/useeffect">UseEffect</NavLink>
              </li>
              <li className="mx-2">
                <NavLink to="/useref">UseRef</NavLink>
              </li>
              <li className="mx-2">
                <NavLink to="/usememo">UseMemo</NavLink>
              </li>
              <li className="mx-2">
                <NavLink to="/usecallback">UseCallback</NavLink>
              </li>
              <li className="mx-2">
                <NavLink to="/useredux">UseRedux</NavLink>
              </li>
              <li className="mx-2">
                <NavLink to="/customhook">CustomHook</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default HeaderBar;
