import React from "react";
import "./styles/style.css";
import "font-awesome/css/font-awesome.min.css";
import logo from "./images/In-Class-01-01.png";
import avatar from "./images/img_avatar.png";

function App() {
  return (
    <div>
      <div className="horizontal">
        <a href="link">
          <img className="logo" src={logo}></img>
        </a>

        <div className="contaniers"></div>
        <div className="nav-container">
          <select className="role">
            <option value="0">Student</option>
            <option value="1">Teacher</option>
          </select>
          <img src={avatar} alt="Avatar" class="avatar" />
        </div>
      </div>
      <div className="vertical">
        <div className="iconspace">
          <a href="link">
            <i className="fa fa-bars fa-2x" style={{ color: "#EAF7FC" }}></i>
          </a>
          <br />
          <br />
          <a href="link">
            <i
              class="fa fa-graduation-cap fa-2x"
              style={{ color: "#C6EAF7" }}
            ></i>
          </a>
          <br />
          <br />
          <a href="link">
            <i class="fa fa-book fa-2x" style={{ color: "#C6EAF7" }}></i>
          </a>
          <br />
          <br />
          <a href="link">
            <i class="fa fa-cog fa-2x" style={{ color: "#C6EAF7" }}></i>
          </a>
          <br />
          <br />
        </div>
        <div className="logout">
          <a href="link">
            {" "}
            <i class="fa fa-power-off fa-2x" style={{ color: "#E3F6FC" }}></i>
          </a>
        </div>
      </div>
      <div className="content">
        <div class="border-bottom">
          <h1>My Classes</h1>
        </div>
        <div className="grade_cont">
          <div className="card">
            <div className="card-header">
              <i class="fa fa-lock" aria-hidden="true">
                <span>&nbsp;Private</span>
              </i>
              <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
            </div>
            <div className="text_wrapp">
              <div className="section_one">IV - A</div>
              <div className="grade">
                <p>Grade IV - A</p>
              </div>
              <small>6 Members</small>
            </div>
          </div>
          <div className="card_one">
            <div className="card-header">
              <i class="fa fa-globe " aria-hidden="true">
                <span>&nbsp;Public</span>
              </i>
              <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
            </div>
            <div className="text_wrapp2">
              <div className="section_two">XII - B</div>
              <div className="Grid">
                <p>Grade XI-B</p>
              </div>
              <small>200+ Members</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
