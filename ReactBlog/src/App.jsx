import React, { useEffect, useState } from "react";
import config from "./config/config";
import { useDispatch } from "react-redux";
import authservice from "./appwrite/auth";
import { loginAction, logoutAction } from "./store/actions/authSlice";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import { Outlet } from "react-router-dom";

function App() {
  // loading state is best practice as per industry standard
  // primary used when data is fetch from network or online database
  // when loading is true : show loading symbol or else show data

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authservice
      .getCurrentUser()
      .then((userdata) => {
        /* 
        As we know store cannot be direcly acces by component it need to be access only through reducer action and here loginaction and logoutaction are nothing but reducer action which store and retrieve dat from store loginaction has 2 parameter state and actions. 
        */
        if (userdata) {
          dispatch(loginAction({ userdata }));
        } else {
          dispatch(logoutAction());
        }
        // here userdata will get stored in store file
      })
      .catch((error) => console.log("useEffect login checkup error", error))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return !loading ? (
    <div className="test">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  ) : null;
}

export default App;
