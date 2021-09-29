import React from "react";
import Banner from "./banner";
import Sessions from "./sessions/index";
import Submissions from "./submissions/index";
import Schedules from "./examSchedules/index";
import Assignments from "./assignments/index";
import "../style.css";

function HomeSection({ containerPadding }) {
  return (
    <>
      <div
        className="main_container"
        style={{ paddingLeft: containerPadding ? containerPadding : "22.3%" }}
      >
        <div className="main_navbar">Home</div>
        <Banner />
        <div className="sessions_submissions">
          <Sessions />
          <Submissions />
        </div>
        <div className="schedules_assignments">
          <Assignments />
          <Schedules />
        </div>
      </div>
    </>
  );
}

export default HomeSection;
