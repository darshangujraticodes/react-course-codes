import React, { useEffect, useState } from "react";

function UseEffectHook() {
  return (
    <>
      <div className="state-wrapper bg-slate-600 h-100 pb-10 py-2 text-white">
        <div className="container mx-auto px-3">
          <h1 className="text-2xl font-medium  my-5">UseEffect Hook</h1>
          <div>
            <h2 className="text-lg font-semibold">React Define</h2>
            <p className="text-md">
              useEffect is a React Hook that lets you synchronize a component
              with an external system.
            </p>

            <h2 className="text-lg mt-3 font-semibold">My Understanding</h2>
            <p className="text-md ">
              <ol>
                <li>
                  1] UseEffect is a function which get triggerd when there is
                  change in state condition of component.
                </li>
                <li>2] It work on Action Reaction Principle.</li>
                <li>
                  UseEffect Hook consist of 2 parameter <br /> a] Function which
                  get triggered on state change <br /> b] Dependency variable
                  are nothing but state variable on changing state function will
                  get triggered.
                </li>
                <li>
                  3] useEffect leads to create of lifecycle in react js which is
                  of 3 types <br />
                  a] Mount Phase : It is run only once when dependency array
                  variable is empty [] and it begins when a component is first
                  created and inserted into the DOM. eg fetch api code is
                  written inside mount state to call it only once. <br />
                  b] Update Phase : It runs on dependency state variable change,
                  In this component data is updated in the Browser DOM. <br />
                  c] Unmount Phase : It runs when certain action is written
                  inside return statment of useEffect inner function. In this
                  component data is removed froms the Browser DOM.
                </li>
              </ol>
            </p>

            <h2 className="text-lg mt-3 font-semibold">Syntax</h2>
            <pre>import {useEffect} from "react";</pre>
            <pre>{`useEffect(Anonymous Function(), Dependency state variable Array) `}</pre>
            <pre>{`useEffect(() => {}, []) `}</pre>

            <div className="">
              <h2 className="text-lg mt-3 font-semibold">
                Use Case of useEffect() Hook
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UseEffectHook;
