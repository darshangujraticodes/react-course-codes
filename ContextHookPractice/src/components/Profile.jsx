import React, { useContext } from "react";
import UserContext from "../context_Type1/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user.username) {
    return <h3 className="text-2xl font-semibold">Please Login...</h3>;
  } else {
    return (
      <h3 className="text-2xl">
        Hi, <span className="font-semibold">{user.username}</span> Welcome to
        ReactJs Course
      </h3>
    );
  }
}

export default Profile;
