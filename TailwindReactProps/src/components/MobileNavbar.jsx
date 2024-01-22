import React from "react";
import Logo from "./component_assets/DGCodes-tsp.png";

function MobileNavbar({ setMenuOpen }) {
  return (
    <div className="w-screen fixed top-0 z-20">
      <div className="w-1/2 h-screen flex flex-col p-8 bg-[#f5f5f5]">
        <img src={Logo} alt="" className="w-40 h-auto mb-5" />
        <ul>
          <li className="mb-5">
            <a href="" className="menu-items">
              Skills
            </a>
          </li>
          <li className="mb-5">
            <a href="" className="menu-items">
              Services
            </a>
          </li>
          <li className="mb-5">
            <a href="" className="menu-items">
              Projects
            </a>
          </li>
          <li className="mb-5">
            <a href="" className="menu-items">
              Testimonial
            </a>
          </li>
        </ul>
        <button className="web-btn">Connect Me !</button>
      </div>
      <div
        onClick={() => {
          setMenuOpen(false);
        }}
        className="w-screen h-screen bg-[rgba(0,0,0,0.5)] fixed top-0 -z-10"
      ></div>
    </div>
  );
}

export default MobileNavbar;
