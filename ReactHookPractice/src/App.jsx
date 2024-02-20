import { Outlet } from "react-router-dom";
import HeaderBar from "./components/HeaderBar";

function App() {
  return (
    <>
      <HeaderBar />
      <div className="Main-Wrapper">
        <h1 className="text-3xl font-semibold text-center my-5">
          Practice React Hooks
        </h1>
      </div>
      <Outlet />
    </>
  );
}

export default App;
