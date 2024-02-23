import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import UseMemoHook from "./UseMemoHook.jsx";
import UseEffectHook from "./UseEffectHook.jsx";
import UseReduxHook from "./UseReduxHook.jsx";
import UseRefHook from "./UseRefHook.jsx";
import UseStateHook from "./UseStateHook.jsx";
import UseContextHook from "./UseContextHook.jsx";
import UseCallbackHook from "./UseCallbackHook.jsx";
import CustomHook from "./CustomHook.jsx";
import HomePage from "./HomePage.jsx";
import ContextLogin from "./ContextLogin.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<HomePage />} />
      <Route path="usestate" element={<UseStateHook />} />
      <Route path="useeffect" element={<UseEffectHook />} />
      <Route path="usecallback" element={<UseCallbackHook />} />
      <Route path="usememo" element={<UseMemoHook />} />
      <Route path="usecontext" element={<UseContextHook />} />
      <Route path="useredux" element={<UseReduxHook />} />
      <Route path="useref" element={<UseRefHook />} />
      <Route path="customhook" element={<CustomHook />} />
      <Route path="context-login" element={<ContextLogin />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
