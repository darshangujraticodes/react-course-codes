import React, { useState } from "react";
import UserContext from "./UserContext";

function UserContextProvider({ children }) {
  const [user, setUser] = useState();
  return (
    // Note : where the context provider is create it is based on import name variableName.Provider
    // Here UserContext is imported variable name and Provider is wrapper to wrap data of all children
    // here children are all component which will get direct access to UserContext file data
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
