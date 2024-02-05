import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import ContactUs from "./Components/ContactUs.jsx";
import HomeBody from "./Components/HomeBody.jsx";
import ServiceSection from "./Components/ServiceSection.jsx";
import AboutUs from "./Components/AboutUs.jsx";
import FetchUrlData from "./Components/FetchUrlData.jsx";
import Layout from "./Layout.jsx";
import UserLogin from "./Components/UserLogin.jsx";
import AddTodo from "./Components/AddTodo.jsx";
import { Provider } from "react-redux";
import { store } from "./app/Store.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<HomeBody />} />
      <Route path="aboutus" element={<AboutUs />} />
      <Route path="services" element={<ServiceSection />} />
      <Route path="contactus" element={<ContactUs />} />
      <Route path="login" element={<UserLogin />} />
      <Route path="addtodo" element={<AddTodo />} />

      <Route path="fetchdata/:userdata" element={<FetchUrlData />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
