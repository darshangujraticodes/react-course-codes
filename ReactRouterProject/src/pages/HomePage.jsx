import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigateHook = useNavigate();

  return (
    <>
      <div className="container mx-auto py-8">
        <div className="btn-wrap">
          <button
            onClick={() => navigateHook("/about-us")}
            className=" bg-indigo-700 text-white rounded-lg text-2xl px-3 py-2  "
          >
            Go to About Us page
          </button>
        </div>
      </div>
    </>
  );
}

export default HomePage;
