import React, { useState } from "react";
import ReactUseEffectHook from "./ReactUseEffectHook";

function ComponentLifecycle() {
  const [isShown, setIsShown] = useState(true);

  console.log(isShown);

  const ReactUseHookComponent = isShown ? <ReactUseEffectHook /> : null;
  console.log(ReactUseHookComponent);

  //   console.log(ReactUseHookComponent);

  function enableComponent() {
    setIsShown((t) => !t);
    console.log("enable compo btn click");
  }

  return (
    <div className="ComponentLifeCycle-wrapper">
      <div className="container">
        <div className="row">
          {/* <div className="col-4 text-start">
            <h3>Component Lifecyle 3 Types with useEffect() Hooks Practise</h3>

            <ul className="text-start">
              <li>
                1] Mounting = It is process where component is created and
                attached to main page{" "}
              </li>
              <li>
                2] Updating =It is a process in which component is updated and
                re-render to reflect all change in page{" "}
              </li>
              <li>
                3] UnMounting = It is a process in which component is removed
                from page.
              </li>
            </ul>
          </div> */}
          {/* <div className="col-4 text-start">
            Practise Project Rules <br /> 1] print "re-render" on name and age
            change <br /> 2] print "Hii.." on mounting component <br /> 3] print
            "Bye.." on unmounting component <br /> 4] print name on changing
            only name <br /> 5] print the whole name with 1 sec delay on after
            continous change of name <br />
          </div> */}
          <div className="col-12">
            <button onClick={enableComponent} className="btn btn-primary">
              Click to Enable or Disable component
            </button>
            {/* <ReactUseHookComponent /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComponentLifecycle;
