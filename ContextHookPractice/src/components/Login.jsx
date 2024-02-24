import React, { useState } from "react";
import Profile from "./Profile";
import { useContext } from "react";
import UserContext from "../context_Type1/UserContext";

function Login() {
  const { setUser } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("username : ", username, "Password :", password);
    setUser({ username, password });
  };

  const handleReset = (e) => {
    e.preventDefault();
    setUsername("");
    setPassword("");
  };

  return (
    <>
      <div className="p-5 border-b-neutral-700 ">
        <h1 className="font-semibold text-3xl">Context Hook Login</h1>
        <br />
        <input
          type="text"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter Your Name"
          className="rounded my-3 px-4 py-3 text-2xl border-2 border-neutral-800 "
        />
        <br />
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Your Password"
          className="rounded my-3 px-4 py-3 text-2xl border-2 border-neutral-800 "
        />
        <br />
        <button
          onClick={handleSubmit}
          className="rounded my-3 mx-3 px-4 py-3 bg-gray-900 text-white text-2xl border-2 border-neutral-800 "
        >
          Submit
        </button>
        <button
          onClick={handleReset}
          className="rounded my-3 mx-3 px-4 py-3 bg-gray-900 text-white text-2xl border-2 border-neutral-800 "
        >
          Reset
        </button>
      </div>
      <div className="profile-wrap mt-4">
        <Profile />
      </div>
    </>
  );
}

export default Login;
