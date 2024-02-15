import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import HeaderNavbar from "./components/HeaderNavbar";
import { Outlet } from "react-router-dom";
import FooterBar from "./components/FooterBar";
import HomeBody from "./components/HomeBody";

function App() {
  return (
    <>
      <HeaderNavbar />
      <Outlet />
      <FooterBar />
    </>
  );
}

export default App;
