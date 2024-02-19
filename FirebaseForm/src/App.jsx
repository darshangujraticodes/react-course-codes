import { Outlet } from "react-router-dom";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./../node_modules/bootstrap/dist/js/bootstrap.bundle";
import HeaderBar from "./components/HeaderBar";
import { useEffect, useState } from "react";

function App() {
  return (
    <>
      <div className="app-wrap ">
        <HeaderBar />
        <Outlet />
      </div>
    </>
  );
}

export default App;
