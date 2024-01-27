import "./App.css";
import FooterBar from "./Components/FooterBar";
import HeaderBar from "./Components/HeaderBar";
import "./index.css";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <HeaderBar />
      <Outlet />
    </>
  );
}

export default App;
