import React from "react";
import "./schedule-style.css";

function Schedule({ item }) {
  return (
    <>
      <div className="schedule_details">
        <div>{item.subject}</div>
        <div>{item.week}</div>
        <div>{item.time}</div>
        <div style={{ color: "black" }}>{item.option}</div>
      </div>
    </>
  );
}

export default Schedule;
