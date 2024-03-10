import React from "react";

function LoginPage() {
  const handleLogin = () => {};
  return (
    <>
      <div className="py-8 ">
        <h2 className="text-center text-5xl font-medium">
          Nested Routing in React JS
        </h2>
        <div className="form-wrap flex justify-center mt-5">
          <input
            type="text"
            placeholder="Enter your username"
            className="p-3 mx-3 border-4"
            required
          />
          <br />
          <input
            type="text"
            placeholder="Enter your password"
            className="p-3 mx-3 border-4"
            required
          />
          <br />
          <button
            className="p-3 border-4 rounded-lg border-indigo-700"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
