import { Outlet } from "react-router-dom";
import HeaderBar from "./components/HeaderBar";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <>
      <UserContextProvider>
        <HeaderBar />
        <div className="Main-Wrapper">
          <h1 className="text-3xl font-semibold text-center my-5">
            Practice React Hooks
          </h1>
        </div>
        <Outlet />
      </UserContextProvider>
    </>
  );
}

export default App;
