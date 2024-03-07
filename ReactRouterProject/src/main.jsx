import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ServicePage from "./pages/ServicePage.jsx";
import AboutUsPage from "./pages/AboutUsPage.jsx";
import ContactUsPage from "./pages/ContactUsPage.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import EmployeeDetails from "./pages/EmployeeDetails.jsx";
import SearchPage from "./pages/SearchPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<HomePage />} />
      <Route path="services" element={<ServicePage />} />
      <Route path="about-us" element={<AboutUsPage />} />
      <Route path="contact-us" element={<ContactUsPage />} />
      {/* Below is the case of redirection to deidcated 404 page on invalid URL */}
      {/* <Route path="/*" element={<PageNotFound />} /> */}
      {/* below is the case of Redirecting to certain page using Navigate */}
      {/* <Route path="/*" element={<Navigate to="/about-us" />} /> */}
      <Route path="employee/:name/:jobRole" element={<EmployeeDetails />} />
      <Route path="search" element={<SearchPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
