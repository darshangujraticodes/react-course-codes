import React from "react";
import { NavLink, Link } from "react-router-dom";
import DGProfileLogo from "../assets/DG-Profile.png";

function HeaderSection() {
  return (
    <>
      <section className="py-4 bg-[#262626] text-xl text-white sticky top-0 z-50 ">
        <nav className="container mx-auto text-center flex justify-between">
          <div className="logo-wrap bg-[#f5f5f5] rounded-lg">
            <Link to="/">
              <img
                src={DGProfileLogo}
                alt="DG-Profile"
                className="w-[80px] p-1"
              />
            </Link>
          </div>
          <div className="flex">
            <ul className=" flex items-center">
              <li className="mr-5">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `  ${isActive ? "bg-indigo-700" : "bg-[#262626]"} 
                      duration-200 text-2xl px-3 py-1 rounded-lg hover:bg-indigo-700 font-semibold  `
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="mr-5">
                <NavLink
                  to="/about-us"
                  className={({ isActive }) =>
                    `  ${isActive ? "bg-indigo-700" : "bg-[#262626]"} 
                      duration-200 text-2xl  px-3 py-1 rounded-lg hover:bg-indigo-700 font-semibold   `
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li className="mr-5">
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    `  ${isActive ? "bg-indigo-700" : "bg-[#262626]"} 
                      duration-200 text-2xl  px-3 py-1 rounded-lg hover:bg-indigo-700  font-semibold  `
                  }
                >
                  Services
                </NavLink>
              </li>
              <li className="mr-5">
                <NavLink
                  className={({ isActive }) =>
                    `  ${isActive ? "bg-indigo-700" : "bg-[#262626]"} 
                    duration-200 px-3 text-2xl  py-1 rounded-lg hover:bg-indigo-700  font-semibold     `
                  }
                  to="/contact-us"
                >
                  Contact Us
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  className={({ isActive }) =>
                    `  ${isActive ? "bg-indigo-700" : "bg-[#262626]"} 
                    duration-200 px-3 text-2xl  py-1 rounded-lg hover:bg-indigo-700  font-semibold     `
                  }
                  to="/search"
                >
                  Search
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </section>
    </>
  );
}

export default HeaderSection;
