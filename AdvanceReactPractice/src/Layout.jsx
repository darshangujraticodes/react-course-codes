import React from "react";
import HeaderBar from "./Components/HeaderBar";
import "./index.css";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <HeaderBar />
      <Outlet />
    </>
  );
}

export default Layout;
