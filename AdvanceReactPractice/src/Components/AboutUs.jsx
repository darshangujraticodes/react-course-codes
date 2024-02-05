import React, { useState } from "react";
// here creating custom hook for LocalStorage operation
import useLocalStorage from "../hooks/useLocalStorage";

function AboutUs() {
  const [todoVal, setTodoVal] = useState("");

  const { setItemValue, getItemValue } = useLocalStorage(todoVal);

  return (
    <div className="container-section text-center py-12">
      <h1 className="text-5xl font-medium text-black">
        Local Storage in ReactJS
      </h1>
      <input
        type="text"
        className="mt-8 w-[500px] p-3 text-lg font-semibold rounded-lg border-2 
              border-black placeholder:p-4  placeholder:text-black 
              placeholder:rounded-lg  "
        value={todoVal}
        onChange={(e) => setTodoVal(e.target.value)}
        placeholder="Enter Data"
      />
      <div className="flex justify-center gap-4">
        <button
          onClick={setItemValue}
          className="mt-5  py-2 w-[100px] text-lg font-semibold  bg-purple-700 text-white  rounded-lg hover:bg-[#262626] hover:text-white"
        >
          SET
        </button>
        <button className="mt-5  py-2 w-[100px] text-lg font-semibold  bg-purple-700 text-white rounded-lg hover:bg-[#262626] hover:text-white">
          GET
        </button>
        <button className="mt-5  py-2 w-[100px] text-lg font-semibold  bg-purple-700 text-white  rounded-lg hover:bg-[#262626] hover:text-white">
          Remove
        </button>
      </div>
    </div>
  );
}

export default AboutUs;
