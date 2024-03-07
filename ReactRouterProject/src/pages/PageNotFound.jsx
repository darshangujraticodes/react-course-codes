import React from "react";
import SadFace from "../assets/face-sad-sweat.svg";

function PageNotFound() {
  return (
    <>
      <div className="page-not-found py-8">
        <div className="container mx-auto  flex justify-center">
          <div className="img-wrap  text-center">
            <img src={SadFace} className="w-[230px] " alt="" />
          </div>
        </div>
        <div className="container mx-auto">
          <div>
            <h1 className="text-center  text-[100px] font-semibold leading-[115px]">
              404
            </h1>
            <p className="text-center font-medium text-[23px]">
              Page Not Found
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PageNotFound;
