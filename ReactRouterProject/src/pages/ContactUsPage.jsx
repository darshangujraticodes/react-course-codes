import React from "react";
import { useNavigate } from "react-router-dom";

function ContactUsPage() {
  // useNavigate() is use for conditional Page redirection and redirecting on Mouse Click
  const navigateHook = useNavigate();
  return (
    <>
      <div className="container mx-auto py-8">
        <div className="btn-wrap">
          <button
            onClick={() => navigateHook("/")}
            className=" bg-indigo-700 text-white rounded-lg text-2xl px-3 py-2  "
          >
            Go to Home page
          </button>
        </div>
      </div>
    </>
  );
}

export default ContactUsPage;
