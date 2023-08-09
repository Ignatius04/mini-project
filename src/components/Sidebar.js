import React from "react";
import logo from "../assets/test.png";
import "../assets/style.css";

const Sidebar = () => {
  return (
    <aside class="sidebar open">
      <header>
        <div class="image-text">
          <span class="image">
            <img src={logo} alt="logo" />
          </span>
          <div class="text logo-text">
            <span class="name">E - Learning</span>
          </div>
        </div>
      </header>
      <div class="menu-bar">
        <div class="menu">
          <ul class="menu-links">
            <li class="nav-link" id="active">
              <a href="Index.php">
                <span class="text nav-text" id="activeColor">
                  Dashboard
                </span>
              </a>
            </li>
            <li class="nav-link">
              <a href="AllotmentList.php">
                <span class="text nav-text">Allotment List</span>
              </a>
            </li>
            <li class="nav-link">
              <a href="UnallotedList.php">
                <span class="text nav-text">Unallotted List</span>
              </a>
            </li>
            <li class="nav-link">
              <a href="Details.php">
                <span class="text nav-text">Details</span>
              </a>
            </li>
            <li class="nav-link">
              <a href="Details.php">
                <span class="text nav-text">Details</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
