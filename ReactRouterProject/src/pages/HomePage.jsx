import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";

function HomePage() {
  const [showModal, setShowModal] = useState(false);

  const navigateHook = useNavigate();

  return (
    <>
      <div className="container mx-auto py-8 flex flex-col items-center ">
        {/* <div className="btn-wrap my-5 mx-3">
          <button
            onClick={() => navigateHook("/about-us")}
            className=" bg-indigo-700 text-white rounded-lg text-2xl px-3 py-2  "
          >
            Go to About Us page
          </button>
        </div> */}
        <h1 className="text-5xl font-bold my-5">Popup Modal</h1>
        <div className="btn-wrap my-5 mx-3">
          <button
            onClick={() => setShowModal(true)}
            className=" mx-3  bg-indigo-700 text-white rounded-lg text-2xl px-4 py-2  "
          >
            Get the eBook
          </button>
        </div>
        {showModal && <Modal onClose={() => setShowModal(false)} />}
      </div>
    </>
  );
}

export default HomePage;
