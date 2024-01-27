import { Outlet } from "react-router-dom";
import FooterBar from "./Components/FooterBar";
import HeaderBar from "./Components/HeaderBar";
import Layout from "./Layout";
import "./index.css";

function App() {
  return (
    <>
      <HeaderBar />
      <Outlet />
    </>
  );
}

export default App;
