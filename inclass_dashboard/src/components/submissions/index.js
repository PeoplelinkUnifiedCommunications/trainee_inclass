import React from "react";
import Submission from "./submission";

function Submissions() {
  return (
    <>
      <div className="sub_container">
        <div className="sub_wrapper">
          <p>Your Submissions</p>
          <small style={{ color: "#03b8e2" }}>See all</small>
        </div>
        <div className="subWork_container">
          <Submission />
          <hr
            color="lightgrey"
            style={{ height: "0.2px", margin: "4px 0px" }}
          />
          <Submission sec_sub="sec_sub" />
        </div>
      </div>
    </>
  );
}

export default Submissions;
