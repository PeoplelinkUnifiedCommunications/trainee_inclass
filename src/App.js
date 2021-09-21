import React from "react";
import "./style.css";
import bg from "./Images/3718984.png";
import vk from "./Images/In-Class-01-01.png";

class App extends React.Component {
  render() {
    return (
      <div className="fontall">
        <div className="split left">
          {/* <img src = {bg} /> */}
          <h2 className="font">
            Building{" "}
            <span style={{ color: "orange" }}>Virtual Communication</span>{" "}
            Between
            <br /> Teacher And Student
          </h2>
          <div className="bottom">
            <h5>The Learning Platform With An Unparalled User Experiance</h5>
            <h5>
              <span style={{ color: "orange" }}>
                CREATE CLASS | JOIN CLASS | TEACH & LEARN
              </span>
            </h5>
            <h5>
              HIPA ELIGIBLE AND PCI DSS, SOC, ISO/EIC 27017, ISOEIC 27018, AND
              ISO 9001 COMPLAINT.
            </h5>
          </div>
        </div>

        <div class="split right">
          <form>
            <select className="select">
              <option>English</option>
              <option>हिंदी</option>
              <option>తెలుగు</option>
            </select>
            <div className="flex">
              <img className="logo" src={vk} />
              <h2>
                <label>Login</label>
              </h2>
              <input
                className="input"
                type="email"
                placeholder="Username"
                required
              />
              <br /><br /><br />
              
              <div className="input-icon">
                <input
                  className="input password"
                  type="password"
                  placeholder="Password"
                  required
                />
                <i className="fas fa-eye-slash eye"></i>
              </div>
              <br />
              <br />
              <button>Login</button>
              <br />
              <br />
              <div className="Forgot">
                <a href="link"> Forget Password?</a>
                <div>
                  <label>Don't have an account at?</label>
                  <a href="link">Signup?</a>
                </div>
              </div>
              <div className="copyright">
                <h5>
                  <p>
                    copyright Ⓒ 2020-21 inclass All rights reserved | Powered by
                  </p>
                  <p>Peoplelink Unified Communications Pvt Ltd</p>
                </h5>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default App;
