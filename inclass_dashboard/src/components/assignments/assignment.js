import React from "react";
import "./assignment-style.css";

function Assignmnet({ item }) {
  return (
    <div className="assgn_details">
      <div className="assgn_wrapper">
        <div className="assgn_name">
          <span className="pointer" style={{ backgroundColor: item?.color }}>
            .
          </span>
          <div>
            English <br /> <p>Chapter ||</p>
          </div>
        </div>
        <div>
          Assignment Name <p>Topic Name</p>
        </div>
        <div>
          12:00 PM <p>04/05/2021</p>
        </div>
        <div
          style={{
            color: item?.color,
            fontSize: "0.8rem",
            paddingRight: "8px",
          }}
        >
          {item?.name}
        </div>
      </div>
    </div>
  );
}

export default Assignmnet;
