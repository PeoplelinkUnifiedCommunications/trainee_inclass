import React from "react";
import PicOne from "../../images/michael-dam.jpg";
import PicTwo from "../../images/sigmund.jpg";
import "./submission-style.css";

function Submission({ sec_sub }) {
  return (
    <div className="work_container">
      <div className="work_wrapper">
        <img
          src={sec_sub ? PicTwo : PicOne}
          alt="michael-dam"
          style={{ width: "35px", height: "35px", borderRadius: "4px" }}
        />
        <div className="work_details">
          <p>{sec_sub ? "Meeting Name comes here" : "HomeWork Title Name"}</p>
          {sec_sub ? (
            <>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                <span>
                  <i class="fas fa-file-pdf" style={{ color: "#03B8E2" }}></i>{" "}
                  &nbsp; Chapter2.doc
                </span>
                <span>
                  <i class="fas fa-file-pdf" style={{ color: "#03B8E2" }}></i>{" "}
                  &nbsp; Chapter2.doc
                </span>
                <span>+ 1 </span>
              </div>
            </>
          ) : (
            <p>
              <i class="fas fa-file-pdf" style={{ color: "#03B8E2" }}></i>
              Homework.pdf
            </p>
          )}
        </div>
      </div>
      <div className="timings">
        <small>03:30 PM</small>
        <br />
        <small style={{ textAlign: "right" }}>Today</small>
      </div>
    </div>
  );
}

export default Submission;
