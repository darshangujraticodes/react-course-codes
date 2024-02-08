import React from "react";

function App() {
  console.log(import.meta.env.VITE_APPWRITE_URL);
  return (
    <>
      <div className="text-center my-8 ">
        <h1 className="text-5xl">React Blog</h1>
      </div>
    </>
  );
}

export default App;
