import { useState } from "react";
import PasswordGenerator from "./components/PasswordGenerator";
import StopWatch from "./components/StopWatch";
import ReactjsLessons from "./components/ReactjsLessons";
import csTechtubeLogo from "./assets/cs.png";
import userAPI from "./JsonApiData.json";
import "./JsonStyle.css";
import ArrayOprHooks from "./components/ArrayOprHooks";
import ComponentLifecycle from "./components/ComponentLifecycle";
import ReactUseEffectHook from "./components/ReactUseEffectHook";
import JsonApiFetch from "./components/JsonApiFetch";

function App() {
  const [counter, setCounter] = useState(1);
  const [counter2, setCounter2] = useState(1);
  let [color, setColor] = useState("#f5f5f5");

  function setBlue() {
    setColor("#0B5ED7");
  }

  function setGreen() {
    setColor("#157347");
  }

  function numAdd() {
    // console.log("btn Clicked !!");
    setCounter(counter + 1);
  }

  function numAdd2() {
    // setCounter2(counter2 + 1);
    // setCounter2(counter2 + 1);
    // setCounter2(counter2 + 1);
    // Here above we have declare useState 3 time to update state and rerender it
    // but it combines the similar performing task in on single state due to which it counter by 1 only

    // So to Resolve the we need to declare function inside setState()
    setCounter2((currentCounter) => (currentCounter += 1));
    setCounter2((currentCounter) => (currentCounter += 1));
    setCounter2((currentCounter) => (currentCounter += 1));

    // in this it will run fn get value set state, then in new state inside fn fetch new state and work on to update
    // it is specifically ised we have to more than 1 inter related setstate() use with exchanging data
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
              Blue Button
            </a>

            <a href="#" className="btn btn-success mx-2" onClick={setGreen}>
              Green Button
            </a>

            <a
              href="#"
              className="btn btn-warning mx-2"
              onClick={() => setColor("#FFCA2C")}
            >
              Yellow Button
            </a>

            <a
              href="#"
              className="btn btn-secondary mx-2"
              style={{ backgroundColor: "#5C636A" }}
              onClick={() => setColor("#5C636A")}
            >
              Gray Button
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
                    <li>Employee ID : {userAPI.id} </li>
                    <li>Employee Name : {userAPI.name} </li>
                    <li>Education : {userAPI.education} </li>
                    <li>Bio : {userAPI.bio} </li>
                    <li>IsMarried : {JSON.stringify(userAPI.isMarried)} </li>
                    <li>Location : {userAPI.location} </li>
                  </ul>
                </div>
              </div>

              <hr className="my-5" />
              <h3 className="text-center mb-4">ReactJS Hooks Practise</h3>

              <div className="col-md-4">
                <div className="hooks-wrapper">
                  <h4 className="text-center mb-4">useState() Hook</h4>
                  <div className="">
                    <h5 className="my-3">Number Counter: {counter} </h5>
                    <button className="  btn btn-primary" onClick={numAdd}>
                      Click to add 1
                    </button>
                    <br />
                    <h5 className="my-3">Number Counter: {counter2}</h5>

                    <button className="  btn btn-primary" onClick={numAdd2}>
                      Click to add 3
                    </button>
                    <h6>
                      Special case of batching multiple useSate() update in one
                      task
                    </h6>
                  </div>
                </div>
              </div>

              <hr className="my-5" />
            </div>
          </div>
        </div>

        <div className="array-task-wrapper">
          <ArrayOprHooks />
        </div>

        <hr className="my-5" />
        <ComponentLifecycle />

        <hr className="my-5" />
        <JsonApiFetch />

        <hr className="my-5" />
      </div>
    </>
  );
}

export default App;
