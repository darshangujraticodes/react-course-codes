import React from "react";
import { Link } from "react-router-dom";

function FooterBar() {
  return (
    <div className="container-section ">
      <footer>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <Link to="/">Logo Image</Link>
          </div>
          <div>
            <Link to="" />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default FooterBar;
