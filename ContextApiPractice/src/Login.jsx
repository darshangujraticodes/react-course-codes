import React, { useContext, useState } from "react";
import UserContext from "./Context/UserContext";

// In this login we we will fetch tha data and send the data through context api
// Created context data is fetch through useContext() hook

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Always note before importing or fetching data from created context
  // kindly first check does it is wrapped under context provide in app.jsx
  // otherwise will give error of cannot destructure propertt in useContext() hook

  const { setUser } = useContext(UserContext);

  const handleClick = () => {
    // alert("btn Click !!");
    setUser({ username, password });
  };

  return (
    <>
      <div className="container-section py-12 login-wrapper">
        <h1 className="text-4xl font-medium text-black text-center">
          User Login
        </h1>

        <div className="form-wrapper text-center">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-5 p-3 text-lg font-semibold rounded-lg border-2 border-black placeholder:p-4 
            placeholder:text-black placeholder:rounded-lg "
            required
          />
          <br />
          <input
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-5 p-3 text-lg font-semibold rounded-lg border-2 border-black placeholder:p-4 
            placeholder:text-black placeholder:rounded-lg "
            required
          />
          <br />
          <button
            onClick={handleClick}
            className="mt-5 px-3 py-2 w-[20%] text-lg font-semibold  bg-purple-700 text-white rounded-lg hover:bg-[#262626] hover:text-white "
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
