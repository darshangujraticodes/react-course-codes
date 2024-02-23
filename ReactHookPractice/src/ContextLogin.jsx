import React, { useContext, useState } from "react";
import UserContext from "./context/UserContext";
import ContextProfile from "./ContextProfile";

function ContextLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // now here we will usecontext hook and import user and setuser usestate hook to perfomr operation
  // import function and from which context need to be mention
  const { setUser } = useContext(UserContext);

  console.log(username, password);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <>
      <div className="login-wrapper text-center">
        <h1 className="text-xl font-semibold">Context Hook Login</h1>
        <br />
        <input
          placeholder="Username"
          type="text"
          className="px-4  py-3 font-semibold mt-3 text-lg border-4 rounded-md border-slate-950"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          placeholder="Password"
          type="password"
          className="px-4  py-3 font-semibold mt-3 text-lg border-4 rounded-md border-slate-950"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button
          className="py-3 px-4 mt-3 text-lg font-semibold rounded-md bg-indigo-700 text-white "
          onClick={handleSubmit}
        >
          Submit
        </button>
        <br />
        <ContextProfile />
      </div>
    </>
  );
}

export default ContextLogin;
