import { useEffect, useState } from "react";
import Card from "./components/Card";
import Login from "./components/Login";
import ThemeBtn from "./components/ThemeBtn";
import UserContextProvider from "./context_Type1/UserContextProvider";
import { ThemeContextProvider } from "./context_Type2/ThemeContext";

function App() {
  // Quick Hack here we will fetch all object variables and function assign operation and it will automatically induced on context

  // Note: while creating context we have only created variable and methods operation was not assigned oepration are assigned during using themwhile passing as value

  const [themeMode, setThemeMode] = useState("light");

  const darkMode = () => {
    setThemeMode("dark");
  };

  const lightMode = () => {
    setThemeMode("light");
  };

  // Now here comes DOM Manipulation

  useEffect(() => {
    const themeDOM = document.querySelector("html").classList;
    themeDOM.remove("light", "dark");
    themeDOM.add(themeMode);
  }, [themeMode]);

  return (
    <>
      <div className="Homeframe pt-8">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <UserContextProvider>
              <div className="login-wrap text-center">
                <Login />
              </div>

              <div className="card-wrap mt-5 text-center">
                <h1 className="font-semibold text-3xl">Context Hook Card</h1>
                <ThemeContextProvider
                  value={{ themeMode, darkMode, lightMode }}
                >
                  <div className="theme-wrap p-5 mt-5 ">
                    <ThemeBtn />
                    <br />
                    <Card />
                  </div>
                </ThemeContextProvider>
              </div>
            </UserContextProvider>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
