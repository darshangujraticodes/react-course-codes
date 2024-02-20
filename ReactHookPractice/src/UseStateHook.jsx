import React from "react";
import { useState } from "react";

function UseStateHook() {
  const [count, setCount] = useState(0);
  const [bgColor, setBgColor] = useState("red");

  const counterHandle = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div className="state-wrapper bg-slate-600 h-[100vh] py-2 text-white">
        <div className="container mx-auto px-3">
          <h1 className="text-2xl font-medium  my-5">UseState Hook</h1>
          <div>
            <h2 className="text-lg font-semibold">React Define</h2>
            <p className="text-md">
              useState is a React Hook that lets you add a state variable to
              your component.
            </p>

            <h2 className="text-lg mt-3 font-semibold">My Understanding</h2>
            <p className="text-md ">
              It helps you to get the current state value of a variable it
              consit of 2 array value eg [data, setData] data define cuurent
              value of state in variable and setData is function which update
              the state when certain condition is meet up.
            </p>

            <h2 className="text-lg mt-3 font-semibold">Syntax</h2>
            <pre>import {useState} from "react";</pre>
            <pre>const [data, setData] = useState();</pre>

            <div>
              <h2 className="text-lg mt-3 font-semibold">
                Use Case of useState() Hook
              </h2>
              <button
                className="bg-[#000] font-medium py-3 px-4 rounded mt-3"
                onClick={counterHandle}
              >
                Click to Counter Number : {count}
              </button>
            </div>
            <div className="mt-4">
              <button
                className="bg-[#ff2424] mx-2 rounded-md text-xl text-white uppercase px-3 py-2"
                onClick={() => {
                  setBgColor("#ff2424");
                }}
              >
                Red
              </button>
              <button
                className="bg-[#2bf92e] mx-2 rounded-md text-xl text-white uppercase px-3 py-2"
                onClick={() => {
                  setBgColor("#2bf92e");
                }}
              >
                Green
              </button>
              <button
                className="bg-[#f12aff] mx-2 rounded-md text-xl text-white uppercase px-3 py-2"
                onClick={() => {
                  setBgColor("#f12aff");
                }}
              >
                Blue
              </button>
              <p
                className="mx-2 mt-4 rounded-md text-xl text-white uppercase px-3 py-2 h-[100px]"
                style={{ backgroundColor: bgColor }}
              ></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UseStateHook;
