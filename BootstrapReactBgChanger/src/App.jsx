import { useState } from "react";
import PasswordGenerator from "./components/PasswordGenerator";
import StopWatch from "./components/StopWatch";
import ReactjsLessons from "./components/ReactjsLessons";

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
          <div className="container">
            <h3 className="text-center">ReactJS Component Properties</h3>
            <div className="row">
              <div className="col-md-6 ">
                <h5 className="text-center">Student Info</h5>
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
              <div className="col-md-6"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
