import React, { useContext } from "react";
import UserContext from "../src/Context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  return (
    <div className="container-section">
      <h1>User Details</h1>
      <div>UserName : {user.username}</div>
      <div>Password : {user.password}</div>
    </div>
  );
}

export default Profile;
