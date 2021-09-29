import React from "react";
import Schedule from "./schedule";
import "./schedule-style.css";

function Schedules() {
  const scheduleDetails = [
    {
      subject: "English",
      week: "Tue",
      time: "08:30 PM",
      option: "...",
    },
    {
      subject: "|| language Hindi",
      week: "Thu",
      time: "09:40 PM",
      option: "...",
    },
    {
      subject: "Science",
      week: "Mon",
      time: "04:30 PM",
      option: "...",
    },
    {
      subject: "Social",
      week: "Fri",
      time: "05:30 PM",
      option: "...",
    },
    {
      subject: "Maths",
      week: "Fri",
      time: "05:30 AM",
      option: "...",
    },
  ];
  return (
    <div className="schedule_cont">
      <div className="schedule_wrapper">
        <p>Exam Schedule</p>
        <small style={{ color: "#03b8e2" }}>See all</small>
      </div>
      <div className="schedule_container">
        {scheduleDetails.map((item, index) => {
          return <Schedule item={item} key={index} />;
        })}
      </div>
    </div>
  );
}

export default Schedules;
