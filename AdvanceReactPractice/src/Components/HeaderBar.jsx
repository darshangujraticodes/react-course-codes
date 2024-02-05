import React from "react";
import { Link, NavLink } from "react-router-dom";

function HeaderBar() {
  return (
    <>
      <div className="bg-[#242424]">
        <div className="navbar-section py-8 md:py-12 container-section ">
          <nav className=" flex justify-between ">
            <div className="logo-wrap text-white text-2xl font-bold">
              <Link to="/">LOGO IMAGE</Link>
            </div>
            <div className="nav-menu-links">
              <ul className=" flex text-md">
                <li>
                  <NavLink
                    to=" "
                    className={({ isActive }) =>
                      ` ${
                        isActive
                          ? " bg-purple-700 p-3 rounded-lg text-white "
                          : "text-white p-3"
                      } mx-4  font-semibold `
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/aboutus"
                    className={({ isActive }) =>
                      ` ${
                        isActive
                          ? " bg-purple-700 py-3 px-2 rounded-lg text-white "
                          : "text-white py-3 px-2"
                      }  mx-4  font-semibold `
                    }
                  >
                    About Us
                  </NavLink>
                </li>
                {/* <li>
                  <NavLink
                    to="/services"
                    className={({ isActive }) =>
                      ` ${
                        isActive
                          ? " bg-purple-700 py-3 px-2 rounded-lg text-white "
                          : "text-white py-3 px-2"
                      }  mx-4  font-semibold `
                    }
                  >
                    Our Services
                  </NavLink>
                </li> */}
                {/* <li>
                  <NavLink
                    to="/contactus"
                    className={({ isActive }) =>
                      ` ${
                        isActive
                          ? " bg-purple-700 py-3 px-2 rounded-lg text-white "
                          : "text-white py-3 px-2"
                      }  mx-4  font-semibold `
                    }
                  >
                    Contact Us
                  </NavLink>
                </li> */}
                <li>
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      ` ${
                        isActive
                          ? " bg-purple-700 py-3 px-3 rounded-lg text-white "
                          : "text-white py-3 px-3"
                      }  mx-4  font-semibold `
                    }
                  >
                    <span className="mr-2">
                      <i class="fa-solid fa-user"></i>
                    </span>
                    Sign In
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/addtodo"
                    className={({ isActive }) =>
                      ` ${
                        isActive
                          ? " bg-purple-700 py-3 px-3 rounded-lg text-white "
                          : "text-white py-3 px-3"
                      }  mx-4  font-semibold `
                    }
                  >
                    <span className="mr-2">
                      <i class="fa-regular fa-pen-to-square"></i>
                    </span>
                    Add Todo
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default HeaderBar;
