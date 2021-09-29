import React from "react";
import Session from "./session";
import "./session-style.css";

function Sessions() {
  return (
    <>
      <div className="session_container">
        <div className="session_header">
          <p>Upcoming Sessions</p>
          <small style={{ color: "#03b8e2" }}>See all</small>
        </div>
        <Session />
        <br />
        <Session sec_meetng_code />
      </div>
    </>
  );
}

export default Sessions;
