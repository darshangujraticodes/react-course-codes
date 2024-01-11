import { useState } from "react";
import PasswordGenerator from "./components/PasswordGenerator";
import StopWatch from "./components/StopWatch";
import ReactjsLessons from "./components/ReactjsLessons";
import csTechtubeLogo from "./assets/cs.png";
import userAPI from "./JsonApiData.json";
import "./JsonStyle.css";

function App() {
  let [color, setColor] = useState("#f5f5f5");

  function setBlue() {
    setColor("#0B5ED7");
  }

  function setGreen() {
    setColor("#157347");
  }

  return (
    <>
      <div
        className="text-center"
        style={{ backgroundColor: color, width: "100%", height: "100%" }}
      >
        <div className=" bgchanger-wrapper">
          <h1 className="pt-5">React BG Changer Project with Bootstrap CSS</h1>
          <div className="">
            <a href="#" className="btn btn-primary mx-2" onClick={setBlue}>
              {" "}
              Blue Button{" "}
            </a>

            <a href="#" className="btn btn-success mx-2" onClick={setGreen}>
              {" "}
              Green Button{" "}
            </a>

            <a
              href="#"
              className="btn btn-warning mx-2"
              onClick={() => setColor("#FFCA2C")}
            >
              {" "}
              Yellow Button{" "}
            </a>

            <a
              href="#"
              className="btn btn-secondary mx-2"
              style={{ backgroundColor: "#5C636A" }}
              onClick={() => setColor("#5C636A")}
            >
              {" "}
              Gray Button{" "}
            </a>

            <a
              href="#"
              className="btn btn-secondary mx-2"
              style={{ backgroundColor: "#f5f5f5", color: "#000" }}
              onClick={() => setColor("#f5f5f5")}
            >
              {" "}
              Lavender Button{" "}
            </a>
          </div>
        </div>

        <hr className="my-5" />

        <div className="password-generator-wrapper ">
          <PasswordGenerator />
        </div>

        <hr className="my-4" />

        <div className="stopwatch-wrapper ">
          <StopWatch />
        </div>

        <hr className="my-4" />

        <div className="reactlesson-wrapper">
          <div className="rect-props container">
            <h3 className="text-center mb-4">ReactJS Lesson's</h3>
            <div className="row">
              <div className="col-md-4">
                <h5 className="text-center mb-4">React Component Properties</h5>
                <ReactjsLessons studName="Harry" studDream="CA" />
                <hr className="my-3" />
                <ReactjsLessons
                  studName="Harmione"
                  studStream="Science"
                  studDream="Doctor"
                  // note if boolean prop value is not passed by default it will set to true
                  hscCompleted
                />
              </div>
              <div className="col-md-4 image-wrapper">
                <h5 className="text-center mb-4">Import External CSS Styles</h5>
                <div className=" ">
                  <img
                    className="logoImage"
                    src={csTechtubeLogo}
                    alt="CS Techtube Logo"
                  />
                </div>
                <h5 className="mt-3">Import Image File</h5>
              </div>
              <div className="col-md-4">
                <div className="json-data-wrapper">
                  <h5 className="text-center mb-4">Importing JSON API Data</h5>
                  <ul className="text-start fw-semibold">
                    <li>Employee ID : {JSON.stringify(userAPI.id)} </li>
                    <li>Employee Name : {JSON.stringify(userAPI.name)} </li>
                    <li>Education : {JSON.stringify(userAPI.education)} </li>
                    <li>Bio : {JSON.stringify(userAPI.bio)} </li>
                    <li>IsMarried : {JSON.stringify(userAPI.isMarried)} </li>
                    <li>Location : {JSON.stringify(userAPI.location)} </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
