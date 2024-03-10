import React from "react";
import { Link, Outlet } from "react-router-dom";

function ServicePage() {
  return (
    <>
      <div className="py-8">
        <h2 className="text-center text-5xl font-medium">
          Nested Routing in React JS
        </h2>
        <div className="flex justify-center pt-5">
          <Link to="website-development" className="mx-3 text-2xl">
            Website Development
          </Link>
          <Link to="app-development" className="mx-3 text-2xl">
            Android Development
          </Link>
          <Link to="software-development" className="mx-3 text-2xl">
            Software Development
          </Link>
        </div>

        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default ServicePage;
