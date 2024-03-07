import React from "react";
import { Link } from "react-router-dom";

function FooterSection() {
  return (
    <>
      <section className="footer-wrapper bg-[#f5f5f5] py-5">
        <div className="container mx-auto">
          <div className="foot-wrap flex flex-wrap justify-between">
            <div className="foot-card ">
              <div className="foot-head mt-3 py-3 border-b-2 text-2xl font-semibold">
                Pages
              </div>
              <div className="foot-content">
                <ul>
                  <li className="mt-2">
                    <Link to="/" className="">
                      Home
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link to="/about-us">About Us</Link>
                  </li>
                  <li className="mt-2">
                    <Link to="/services">Our Service</Link>
                  </li>
                  <li className="mt-2">
                    <Link to="/contact-us">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="foot-card ">
              <div className="foot-head mt-3 py-3 border-b-2 text-2xl font-semibold">
                Pages
              </div>
              <div className="foot-content">
                <ul>
                  <li className="mt-2">
                    <Link to="/" className="">
                      Home
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link to="/about-us">About Us</Link>
                  </li>
                  <li className="mt-2">
                    <Link to="/services">Our Service</Link>
                  </li>
                  <li className="mt-2">
                    <Link to="/contact-us">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="foot-card ">
              <div className="foot-head mt-3 py-3 border-b-2 text-2xl font-semibold">
                Pages
              </div>
              <div className="foot-content">
                <ul>
                  <li className="mt-2">
                    <Link to="/" className="">
                      Home
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link to="/about-us">About Us</Link>
                  </li>
                  <li className="mt-2">
                    <Link to="/services">Our Service</Link>
                  </li>
                  <li className="mt-2">
                    <Link to="/contact-us">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="foot-card ">
              <div className="foot-head mt-3 py-3 border-b-2 text-2xl font-semibold">
                Pages
              </div>
              <div className="foot-content">
                <ul>
                  <li className="mt-2">
                    <Link to="/" className="">
                      Home
                    </Link>
                  </li>
                  <li className="mt-2">
                    <Link to="/about-us">About Us</Link>
                  </li>
                  <li className="mt-2">
                    <Link to="/services">Our Service</Link>
                  </li>
                  <li className="mt-2">
                    <Link to="/contact-us">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FooterSection;
