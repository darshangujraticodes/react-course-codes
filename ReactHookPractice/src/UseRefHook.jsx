import React from "react";

function UseRefHook() {
  return (
    <>
      <div className="state-wrapper bg-slate-600 h-[100vh] py-2 text-white">
        <div className="container mx-auto px-3">
          <h1 className="text-2xl font-medium  my-5">UseRef Hook</h1>
          <div>
            <h2 className="text-lg font-semibold">React Define</h2>
            <p className="text-md">
              useRef is a React Hook that lets you reference a value that’s not
              needed for rendering.
            </p>

            <h2 className="text-lg mt-3 font-semibold">My Understanding</h2>
            <p className="text-md ">
              It is function which help varaiable to persist the value even
              during rendering process eg rendering inside useEffect value will
              be persisit and could not be intialized to initial declared state
              like useState hook on re-render.
            </p>
            <p>
              Also useful for performing DOM maniplulation by giving ref we can
              fetch html tag and apply any style or function like dom
              manipulation.
            </p>

            <h2 className="text-lg mt-3 font-semibold">Syntax</h2>
            <pre>const countRef = useRef(); </pre>

            <div>
              <h2 className="text-lg mt-3 font-semibold">Use Case 1 of Hook</h2>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UseRefHook;
