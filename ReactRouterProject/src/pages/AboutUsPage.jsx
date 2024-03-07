import React from "react";
import Person1 from "../assets/person1.png";
import Person2 from "../assets/person2.png";
import Person3 from "../assets/person3.png";
import Women1 from "../assets/woman1.png";
import { Link } from "react-router-dom";

function AboutUsPage() {
  return (
    <>
      <div className="team-wrapper py-8">
        <div className="container mx-auto">
          <h2 className="text-5xl my-5 text-center font-semibold ">
            Dynamic Routing
          </h2>
          <div className="card-wrap flex justify-between flex-wrap">
            <div className="team-card my-3">
              <div className="img-wrap flex justify-center">
                <img src={Person1} alt="" />
              </div>

              <div className="link-wrap flex justify-center ">
                <Link
                  to="/employee/Darshan/Full-Stack-Developer"
                  className="mt-3 text-2xl text-center font-semibold"
                >
                  Darshan
                </Link>
              </div>
            </div>

            <div className="team-card my-3">
              <div className="img-wrap flex justify-center">
                <img src={Person2} alt="" />
              </div>
              <div className="link-wrap flex justify-center ">
                <Link
                  to="/employee/Aman/Ethical-Hacker"
                  className="mt-3 text-2xl text-center font-semibold"
                >
                  Aman
                </Link>
              </div>
            </div>

            <div className="team-card my-3">
              <div className="img-wrap flex justify-center">
                <img src={Person3} alt="" />
              </div>
              <div className="link-wrap flex justify-center ">
                <Link
                  to="/employee/Rohit/App-Developer"
                  className="mt-3 text-2xl text-center font-semibold"
                >
                  Rohit
                </Link>
              </div>
            </div>

            <div className="team-card my-3">
              <div className="img-wrap flex justify-center">
                <img src={Women1} alt="" />
              </div>
              <div className="link-wrap flex justify-center ">
                <Link
                  to="/employee/Shreya/Data-Scientist"
                  className="mt-3 text-2xl text-center font-semibold"
                >
                  Shreya
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUsPage;
