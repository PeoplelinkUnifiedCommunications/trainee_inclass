import React, { useState } from "react";
import "../style.css";
import HomeSection from "./homeSection";

function SideNav() {
  const [width, setWidth] = useState("0");
  const [left, setLeft] = useState("-7%");
  const [containerPadding, setContainerPadding] = useState("4.5em");

  const handleOpenNav = () => {
    setWidth("230px");
    setLeft("5.2%");
    setContainerPadding("22.3%");
  };

  const handleCloseNav = () => {
    setWidth("0");
    setLeft("-7%");
    setContainerPadding("4.5em");
  };

  return (
    <>
      <nav className="side_nav">
        <ul>
          <li>
            <a href="#" onClick={handleOpenNav}>
              <i class="fab fa-dashcube fa-2x"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fas fa-user fa-2x"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fab fa-dashcube fa-2x"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fas fa-user fa-2x"></i>
            </a>
          </li>
        </ul>
      </nav>
      <nav
        className="second_sidenav"
        style={{ width: width ? width : "230px", left: left ? left : "5.2%" }}
      >
        <div className="back" onClick={handleCloseNav}>
          <span>&#10229;</span> Back
        </div>
        <div className="grade">
          <div className="section">lV-A</div>
          <div className="section_num">
            <div className="section_name">Grade lV - A</div>
            <div>
              <span>6 members </span>
              <span> | </span>
              <span>Private</span>
            </div>
          </div>
        </div>
        <hr style={{ margin: "12px 0px", color: "lightgrey" }} />
        <ul>
          <li>
            <a href="#" style={{ color: "#03b8e2" }}>
              Home
            </a>
          </li>
          <li>
            <a href="#">English</a>
          </li>
          <li>
            <a href="#">|| Language Hindi</a>
          </li>
          <li>
            <a href="#">||| Language Telugu</a>
          </li>
          <li>
            <a href="#">Maths</a>
          </li>
          <li>
            <a href="#">Science</a>
          </li>
          <li>
            <a href="#">Social</a>
          </li>
        </ul>
        <hr style={{ marginTop: "8px" }} />
        <ul>
          <li>
            <a href="#"></a>
          </li>
          <li>
            <a href="#">Content</a>
          </li>
          <li>
            <a href="#">Assignments</a>
          </li>
          <li>
            <a href="#">Grades</a>
          </li>
        </ul>
      </nav>
      <HomeSection containerPadding={containerPadding} />
    </>
  );
}

export default SideNav;
