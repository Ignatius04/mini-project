import React from "react";
import logo from "../assets/test.png";
import "../assets/style.css";

const Navbar = () => {
  return (
    <nav class="nav">
      <span class="image">
        <img src={logo} alt="logo" />
      </span>
    </nav>
  );
};

export default Navbar;
