import { Outlet } from "react-router-dom";
import HeaderSection from "./components/HeaderSection";
import FooterSection from "./components/FooterSection";

function App() {
  return (
    <>
      <HeaderSection />
      <Outlet />
      <FooterSection />
    </>
  );
}

export default App;
