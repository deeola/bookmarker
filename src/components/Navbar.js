import React from "react";
import logo from "../images/logo-bookmark.svg";

const Navbar = () => {
  return (
    <div>
      <nav>
        <img className="logo" src={logo} alt="bookmark_logo" />
        <ul>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#" className="login">
              Login
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
