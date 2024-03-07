import React from "react";
import { useParams } from "react-router-dom";

function EmployeeDetails() {
  // decontstructor should be same mention in routing
  const { name, jobRole } = useParams();
  return (
    <>
      <div className=" container mx-auto employee-details-wrapper py-8">
        <div className="head-wrap ">
          <h2 className="text-center text-3xl font-medium">
            Selected Employee Name is {name} and Job Role is {jobRole}
          </h2>
        </div>
      </div>
    </>
  );
}

export default EmployeeDetails;
