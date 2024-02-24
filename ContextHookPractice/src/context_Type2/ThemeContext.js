//  this context api creation is slight ddifferent based onreal world production methods which you must konw to understand code of project

// in previous we have 2 file 1] to createcontext and 2] to wrap all context in context provider here it will be done in single file

// first create context

import React, { createContext, useContext } from "react";

// but now as we know to perform data operation in context we need action which will store and fetch dat from context file so here we create variable action similar to useState as object inside createcontext parameter

// here we have shared object data just like previous we are setting usestate variable and method in context api here we have stored variable and method to perform operation while creating context to prevent app from crash while starting up.
export const ThemeContext = createContext({
  themeMode: "light",
  darkMode: () => {},
  lightMode: () => {},
});

// Now After creating context we will create contextProvider note we are not wrapping children component here and not passing any value it will done directly in app.jsx we will wrap component and assign value as props.

export const ThemeContextProvider = ThemeContext.Provider;

// Now to prevent 2 import useContext Hook and  ThemeContext we can wrap them in one function using custom Hook

export default function useTheme() {
  return useContext(ThemeContext);
}
