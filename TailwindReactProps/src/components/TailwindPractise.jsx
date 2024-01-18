import React from "react";
// import GameLogo from "";
import CompanyLogo from "./component_assets/gamer-studio-logo.png";
import AboutImg from "./component_assets/code-typing-amico.png";
import FeatureImg from "./component_assets/coding-workshop-class.png";
import "./component-styles.css";

function TailwindPractise() {
  return (
    <div className="tailwind-practise-wrapper">
      <div className="navbar-wrapper sticky top-0 z-30 bg-white drop-shadow-xl py-3 md:py-4 px-3 md:px-0 ">
        <div className=" container-section flex inline-end ">
          <nav className="w-full flex justify-between ">
            <div className="img-wrapper">
              <img
                src={CompanyLogo}
                className="w-40 h-auto"
                alt="GamerStudio Logo"
              />
            </div>
            <div className="nav-link-wrap flex items-center">
              <ul className="md:flex hidden font-sans font-semibold text-xl ">
                <li className="px-3  cursor-pointer">Home</li>
                <li className="px-3  cursor-pointer">About Us</li>
                <li className="px-3  cursor-pointer">Services</li>
                <li className="px-3  cursor-pointer">Portfolio</li>
              </ul>
            </div>
            <div className="nav-btn hidden md:block flex items-center">
              <div className="icon-btn w-36 ">
                <span className="pr-1 ">
                  <svg
                    data-slot="icon"
                    fill="none"
                    stroke-width="1.5"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-7 h-7"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    ></path>
                  </svg>
                </span>
                <a href="" className=" flex items-center">
                  Login
                </a>
              </div>
            </div>
            <div className="togglebar-wrap flex items-center md:hidden relative">
              <div className="toggle-btn  ">
                <svg
                  data-slot="icon"
                  fill="none"
                  stroke-width="1.5"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className=" w-[40px] h-[40px] web-toggle-btn"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  ></path>
                </svg>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div className="banner-section-wrapper section-padding">
        <div className="container-section">
          <div className="grid grid-rows-1">
            <div className="banhead-wrapper text-center ">
              <h1 className="h1-property">Let's Practise Tailwind CSS !</h1>
              <p className=" font-sans pt-7 md:px-48 px-6 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                incidunt dicta, facilis sit adipisci veritatis impedit.
                Distinctio eos asperiores doloremque blanditiis? Nihil, quia! Et
                omnis adipisci at dolore rem. Hic dignissimos doloremque
                corporis reprehenderit totam sit quibusdam temporibus eos
                inventore.
              </p>
            </div>
            <div className="btn-collection my-10 grid md:grid-cols-2 grid-cols-1 gap-4 ">
              <div className="btn-wrapper mx-3 flex md:justify-end justify-center">
                <div className="herobtn-wrapper">
                  <a href="#" className="web-color-btn">
                    EXPLORE NOW
                  </a>
                </div>
              </div>

              <div className="btn-wrapper mt-[32px] md:mt-0 mx-3 flex md:justify-start justify-center">
                <div className="herobtn2-wrapper">
                  <a href="#" className="web-outline-btn">
                    ABOUT US
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="aboutus-wrapper bg-zinc-100  py-8  md:py-16">
        <div className="container mx-auto">
          <h3 className=" font-medium text-center text-5xl pb-6 ">
            (Recomd) Responsive Column Grid
          </h3>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
            <div className="p-8 bg-purple-500 text-white font-bold text-4xl ">
              1
            </div>
            <div className="p-8 bg-purple-500 text-white font-bold text-4xl">
              2
            </div>
            <div className="p-8 bg-purple-500 text-white font-bold text-4xl">
              3
            </div>
            <div className="p-8 bg-purple-500 text-white font-bold text-4xl">
              4
            </div>
            <div className="p-8 bg-purple-500 text-white font-bold text-4xl">
              5
            </div>
          </div>

          <h3 className=" font-medium text-center text-5xl py-6 ">
            Responsive Rows Grid
          </h3>

          <div className="grid grid-rows-4 grid-flow-col  gap-4 mt-5 ">
            <div className="p-8 bg-sky-500 text-white font-bold text-4xl ">
              1
            </div>
            <div className="p-8 bg-sky-500 text-white font-bold text-4xl">
              2
            </div>
            <div className="p-8 bg-sky-500 text-white font-bold text-4xl">
              3
            </div>
            <div className="p-8 bg-sky-500 text-white font-bold text-4xl">
              4
            </div>
            <div className="p-8 bg-sky-500 text-white font-bold text-4xl">
              5
            </div>
            <div className="p-8 bg-sky-500 text-white font-bold text-4xl">
              6
            </div>
          </div>
        </div>
      </div> */}

      <div className="aboutus-section bg-zinc-100  section-padding ">
        <div className="container-section ">
          <div className="grid grid-cols-1 md:grid-cols-2  gap-4  ">
            <div className="img-wrapper text-center mx-5">
              <img src={AboutImg} alt="" className="max-w-full h-auto" />
            </div>
            <div className="about-content-wrapper mx-5">
              <div className="abouthead-wrap">
                <h2 className=" h2-property">About Us</h2>
              </div>
              <div className="about-para-wrap">
                <p className=" pt-5 p-property text-zinc-700 ">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Obcaecati ex officia magnam odio harum perspiciatis! Vitae
                  earum nostrum mollitia animi laboriosam voluptates in dolor
                  doloribus asperiores! Dolore sed. amet consectetur adipisicing
                  elit. Obcaecati ex officia magnam odio harum perspiciatis!
                  Vitae earum nostrum mollitia animi
                </p>
                <p className=" pt-5 p-property text-zinc-700 ">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Obcaecati ex officia magnam odio harum perspiciatis! Vitae
                  earum nostrum mollitia animi laboriosam voluptates in dolor
                  doloribus asperiores! Dolore sed. amet consectetur adipisicing
                  elit. Obcaecati ex officia magnam odio harum perspiciatis!
                  Vitae earum nostrum mollitia animi
                </p>
              </div>
              <div className="about-btn-wrap mt-10">
                <div className="btn-wrap">
                  <a href="#" className="web-color-btn">
                    Know More About Us !
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="features-section   section-padding ">
        <div className="container mx-auto ">
          {/* <div className="grid grid-rows-1">
            <div className="abouthead-wrapper text-center">
              <h2 className=" md:text-5xl text-3xl font-semibold  ">
                About Us
              </h2>
            </div>
          </div> */}
          <div className="grid grid-cols-1 md:grid-cols-2  gap-4  ">
            <div className="about-content-wrapper mx-5">
              <div className="abouthead-wrap">
                <h2 className=" md:text-5xl text-3xl font-semibold font-sans">
                  Course Feature's
                </h2>
              </div>
              <div className="about-para-wrap">
                <p className=" pt-5 text-xl font-sans font-medium text-justify text-zinc-700 ">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Obcaecati ex officia magnam odio harum perspiciatis! Vitae
                  earum nostrum mollitia animi laboriosam voluptates in dolor
                  doloribus asperiores! Dolore sed. amet consectetur adipisicing
                  elit. Obcaecati ex officia magnam odio harum perspiciatis!
                  Vitae earum nostrum mollitia animi
                </p>
                <p className=" pt-5 text-xl font-sans font-medium text-justify text-zinc-700 ">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Obcaecati ex officia magnam odio harum perspiciatis! Vitae
                  earum nostrum mollitia animi laboriosam voluptates in dolor
                  doloribus asperiores! Dolore sed. amet consectetur adipisicing
                  elit. Obcaecati ex officia magnam odio harum perspiciatis!
                  Vitae earum nostrum mollitia animi
                </p>
              </div>
              <div className="about-btn-wrap mt-10">
                <div className="btn-wrap">
                  <a href="#" className="web-color-btn">
                    Know More About Us !
                  </a>
                </div>
              </div>
            </div>
            <div className="img-wrapper text-center mx-5">
              <img
                src={FeatureImg}
                alt=""
                className="max-w-full h-auto  cursor-move hover:-skew-x-6 transform-gpu transition duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="service-card-section section-padding bg-zinc-100  ">
        <div className="container-section">
          <div className="responsive-gridcol3">
            <div className="card-wrap scale-animate drop-shadow-xl  rounded-xl bg-white overflow-hidden mx-3">
              <div className="card-img ">
                <img
                  src="https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg"
                  alt=""
                />
              </div>
              <div className="card-content p-7 pb-10">
                <h4 className=" text-3xl font-semibold font-sans uppercase">
                  Xbox World !
                </h4>
                <p className="text-zinc-700 text-[18px] pt-4 text-justify">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
                  minus asperiores aliquam illo totam fugiat optio consequatur,
                  repellendus eum, quam amet, aperiam dolor.
                </p>
                <div className="card-btn pt-9">
                  <a href="" className="web-color-btn">
                    Buy Now !
                  </a>
                </div>
              </div>
            </div>

            <div className="card-wrap drop-shadow-xl scale-animate bg-white overflow-hidden mx-3">
              <div className="card-img ">
                <img
                  src="https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg"
                  alt=""
                />
              </div>
              <div className="card-content p-7 pb-10">
                <h4 className=" text-3xl font-semibold font-sans uppercase">
                  Xbox World !
                </h4>
                <p className="text-zinc-700 text-[18px] pt-4 text-justify">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
                  minus asperiores aliquam illo totam fugiat optio consequatur,
                  repellendus eum, quam amet, aperiam dolor.
                </p>
                <div className="card-btn pt-9">
                  <a href="" className="web-color-btn">
                    Buy Now !
                  </a>
                </div>
              </div>
            </div>

            <div className="card-wrap drop-shadow-xl scale-animate bg-white overflow-hidden mx-3">
              <div className="card-img ">
                <img
                  src="https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg"
                  alt=""
                />
              </div>
              <div className="card-content p-7 pb-10">
                <h4 className=" text-3xl font-semibold font-sans uppercase">
                  Xbox World !
                </h4>
                <p className="text-zinc-700 text-[18px] pt-4 text-justify">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
                  minus asperiores aliquam illo totam fugiat optio consequatur,
                  repellendus eum, quam amet, aperiam dolor.
                </p>
                <div className="card-btn pt-3 ">
                  <div className="icon-btn w-36 ">
                    <span className="pr-1 ">
                      <svg
                        data-slot="icon"
                        fill="none"
                        stroke-width="1.5"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        className="w-7 h-7 "
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        ></path>
                      </svg>
                    </span>
                    <a href="" className=" flex items-center">
                      Buy Now !
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <script></script>
    </div>
  );
}

export default TailwindPractise;
