import React, { useContext } from "react";
import UserContext from "./context/UserContext";

function ContextProfile() {
  const { user } = useContext(UserContext);

  if (!user.username) {
    return <h3 className="mt-16 text-2xl ">Please Login ...</h3>;
  } else {
    return (
      <h3 className="mt-16 text-2xl ">
        Hii, <span className="font-semibold"> {user.username} </span> Welcome to
        React JS Course !
      </h3>
    );
  }
}

export default ContextProfile;
