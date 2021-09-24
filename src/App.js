import React from "react";
import "./style.css";
import bg from "./Images/3718984.png";
import vk from "./Images/In-Class-01-01.png";

class App extends React.Component {
  render() {
    return (
      <div className="fontall">
        <div className="split left">
          <h2 className="font">
            <span style={{ color: "#25637B" }}>Building </span>
            <span style={{ color: "orange" }}>Virtual Communication</span>{" "}
            <span style={{ color: "#25637B" }}>
              Between
              <br /> Teacher And Student
            </span>
          </h2>
          <img src={bg} alt="img" />

          <div className="bottom">
            <span style={{ color: "#25637B" }}>
              <h5>The Learning Platform With An Unparalled User Experiance</h5>
            </span>
            <h5>
              <span style={{ color: "orange" }}>
                CREATE CLASS | JOIN CLASS | TEACH & LEARN
              </span>
            </h5>
            <span style={{ color: "#25637B" }}>
              <h5>
                HIPA ELIGIBLE AND PCI DSS, SOC, ISO/EIC 27017, ISOEIC 27018, AND
                ISO 9001 COMPLAINT.
              </h5>
            </span>
          </div>
        </div>



        <div class="split right">
          <form>
            <select className="select">
              <option>English</option>
              <option>हिंदी</option>
              <option>తెలుగు</option>
            </select>
          
              <div className="rightlogo">
                <img className="logo" src={vk}></img>
              </div>
              <h2>
                <span style={{ color: "#506E7C" }}>
                  <label>Login</label>
                </span>
              </h2>
              <div className="middle">
              <input
                className="input"
                type="email"
                placeholder="Username"
                required
              />
                <br />
                <br/>
                <br />
              <div className="input-icon">
                <input
                  className="input password"
                  type="password"
                  placeholder="Password"
                  required
                />
                <i className="fas fa-eye-slash eye"></i>
              </div>
              <button>Login</button>
              </div>
              <div className="forgotrow">
                <div className="forgot">Forgot Password</div>
                <div>
                  <span className="dont"> Don't have account?</span>&nbsp;
                  <span style={{color:"#4AB9E2"}}>signin?</span>
              </div>
            </div>

            <div className="copyright">
              <span style={{ color: "#506E7C" }}>
                
                  <small>copyright Ⓒ 2020-21 inclass All rights reserved | Powered by
                  <br />
                  Peoplelink Unified Communications Pvt Ltd</small>
                
              </span>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default App;
