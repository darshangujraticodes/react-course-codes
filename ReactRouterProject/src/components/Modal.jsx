import React, { useRef } from "react";
import { X, Download } from "lucide-react";

function Modal({ onClose }) {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-50 flex justify-center items-center"
    >
      <div className="mt-5 text-white flex flex-col gap-3">
        <button
          onClick={onClose}
          className=" font-semibold absolute  place-self-end"
        >
          <X size={40} />
        </button>
        <div className="bg-indigo-700 px-20 py-12 rounded-lg">
          <div></div>
          <h1 className="text-center text-5xl font-bold">
            Download Free eBook
          </h1>
          <p className="text-center mt-5 text-2xl font-semibold  leading-[37px]">
            5 Secret tips to Crack Full Stack Developer Job
            <span className="block">
              Interview Question + DSA Question Bundle
            </span>
            {/* <span className="block">and Top 5 AI Tools to find Best Jobs</span> */}
          </p>
          <div className="  flex justify-center text-center mt-3">
            <form action="">
              <input
                type="email"
                className="px-4 text-black font-semibold text-xl mt-4 py-3 rounded-md w-full border-gray-400"
                required
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="mt-4  text-2xl bg-black text-white rounded-md w-full flex items-center justify-center gap-2  px-5 py-3"
              >
                <Download /> Download EBook
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
