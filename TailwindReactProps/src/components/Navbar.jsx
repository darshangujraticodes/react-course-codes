import React, { useState } from "react";
import Logo from "./component_assets/DGCodes-tsp.png";
import { RiCloseFill, RiMenu4Line } from "react-icons/ri";
import MobileNavbar from "./MobileNavbar";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    console.log("btn click !!");
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      {menuOpen && <MobileNavbar setMenuOpen={setMenuOpen} />}
      <div className="bg-[#f7f7f7] sticky top-0 z-10">
        <div className="container-section py-3 md:py-4 px-3">
          <nav className="w-full flex justify-between">
            <div className="nav-img-wrap flex items-center">
              <img
                src={Logo}
                alt="Darshan Gujrati Codes"
                className="w-40 h-auto"
              />
            </div>
            <div className="nav-menu-wrap flex items-center hidden lg:flex items-center">
              <ul className="flex ">
                <li>
                  <a href="#" className="menu-items">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#" className="menu-items">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="menu-items">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#" className="menu-items">
                    Testimonial
                  </a>
                </li>
                <li>
                  <a href="#" className="ml-3 web-btn ">
                    Contact Me
                  </a>
                </li>
              </ul>
            </div>
            <div className="nav-btn-wrap flex items-center  lg:hidden ">
              <button onClick={toggleMenu} className=" web-btn text-xl ">
                {menuOpen ? <RiCloseFill /> : <RiMenu4Line />}
              </button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
