import React from "react";
import "../style.css";
import logo from "../images/logo.png"
import avatar from "../images/avatar.jpg"

function header() {
  return (
    <>
      <header className="header">
        <div className="logo"><img src={logo} alt="" style={{width:"80px",height:"40px"}} loading="lazy"/></div>
        <div className="settings">
            <select name="Student" id="">
                <option value="">Student</option>
            </select>
            <img src={avatar} alt="alex_spurun" style={{width:"40px",height:"40px",borderRadius:"50%"}}/>
        </div>
      </header>
    </>
  );
}

export default header;
