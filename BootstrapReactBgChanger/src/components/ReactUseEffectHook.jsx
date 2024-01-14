import React, { useState } from "react";

function ReactUseEffectHook() {
  let [devName, setDevName] = useState("Name");
  let [devExp, setDevExp] = useState(0);

  return (
    <div className="useeffect-wrapper">
      <div className=" text-start">
        <button
          className="btn btn-primary m-3"
          onClick={() => setDevExp((exp) => exp + 1)}
        >
          + Exp
        </button>
        <button
          className="btn btn-primary m-3"
          onClick={() => {
            if (devExp > 0) {
              setDevExp((e) => e - 1);
            } else {
              setDevExp(0);
            }
          }}
        >
          - Exp
        </button>
        <input
          type="text"
          className="w-100 "
          placeholder="Enter Developer name"
          onChange={(e) => setDevName(e.target.value)}
        />
        <h4 className="my-3">
          {devName} has {devExp} Years Experience
        </h4>
      </div>
    </div>
  );
}

export default ReactUseEffectHook;
