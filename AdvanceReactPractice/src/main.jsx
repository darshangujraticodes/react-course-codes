import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import ContactUs from "./Components/ContactUs.jsx";
import HomeBody from "./Components/HomeBody.jsx";
import ServiceSection from "./Components/ServiceSection.jsx";
import AboutUs from "./Components/AboutUs.jsx";
import FetchUrlData from "./Components/FetchUrlData.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<HomeBody />} />
      <Route path="aboutus" element={<AboutUs />} />
      <Route path="services" element={<ServiceSection />} />
      <Route path="contactus" element={<ContactUs />} />
      <Route path="fetchdata/:userdata" element={<FetchUrlData />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
