import { Outlet } from "react-router-dom";
import HeaderBar from "./Components/HeaderBar";
import "./index.css";

// in this I have practice react router dom and react-redux

function App() {
  return (
    <>
      <HeaderBar />
      <Outlet />
    </>
  );
}

export default App;
