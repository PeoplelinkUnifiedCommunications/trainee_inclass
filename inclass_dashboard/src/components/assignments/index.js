import React from "react";
import Assignment from "./assignment";
import "./assignment-style.css";

function Assignments() {
  const status = [
    {
      color: "#4cb93d",
      name: "Finished",
    },
    {
      color: "#FD9335",
      name: "Pending",
    },
    {
      color: "#A9B7BE",
      name: "Not Finished",
    },
  ];
  return (
    <div className="assignment_container">
      <div className="assignment_header">
        <p>Assignments</p>
        <small style={{ color: "#03b8e2" }}>See all</small>
      </div>
      {status.map((item, index) => {
        return <Assignment item={item} key={index} />;
      })}
    </div>
  );
}

export default Assignments;
