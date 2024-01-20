import React from "react";

function UserData({ name, username = "undefine", email = "undefined" }) {
  return (
    <li>
      Name: {name}, Username: {username}, Email: {email}
    </li>
  );
}

export default UserData;
