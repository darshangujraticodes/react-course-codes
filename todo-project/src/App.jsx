import HeaderBar from "./components/HeaderBar";
import FooterBar from "./components/FooterBar";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <HeaderBar />
      <Outlet />
      <FooterBar />
    </>
  );
}

export default App;
