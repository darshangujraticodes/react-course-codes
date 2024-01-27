import React from "react";
import { useParams } from "react-router-dom";

function FetchUrlData() {
  const { userdata } = useParams();

  return (
    <div className="container-section text-center py-12">
      <h1 className="text-5xl font-medium text-black">Fetch Data from URL</h1>
      <h1 className="text-3xl font-medium text-black mt-5">
        User Name : {userdata}
      </h1>
    </div>
  );
}

export default FetchUrlData;
