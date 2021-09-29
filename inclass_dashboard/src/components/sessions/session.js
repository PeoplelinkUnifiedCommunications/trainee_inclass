import React from "react";
import "./session-style.css";

function sessions({ sec_meetng_code }) {
  return (
    <div className="meeting_container">
      <div className="meeting_details_wrapper">
        <div
          className="meeting_code"
          style={{
            border: `${
              sec_meetng_code ? "1px solid #9DF2FC" : "1px solid #fbb534"
            }`,
            color: `${sec_meetng_code ? "#9DF2FC" : "#fbb534"}`,
          }}
        >
          MN
        </div>
        <div className="meeting_details">
          <p>Meeting name comes here</p>
          <p>2-00 PM - 3-00 PM, Today</p>
          <span>6 Members </span>
          <span> | </span>
          <span>Private</span>
        </div>
      </div>
      <div className="join_meeting">
        <a href="#">JOIN</a>
      </div>
    </div>
  );
}

export default sessions;
