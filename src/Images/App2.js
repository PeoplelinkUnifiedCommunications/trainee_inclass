import React from 'react';

function App2(){
    return(

        <div class="split right">
        <form>
        <select className="select">
          <option>English</option>
          <option>हिंदी</option>
          <option>తెలుగు</option>
        </select>
        <img  className="logo" src = {vk} />
        <h2><label>Login</label></h2>
        <input className="input"type="" placeholder="Username" ></input>
        <br /><br />
        <input className="input"type="" placeholder="Password" ></input>
        <br /><br /><br />
        <button>Login</button>
        <br /><br />
        <div className="Forgot">
        <a href = "link"> Forget Password?</a>
        <div>
        <label>Don't have an account at?</label>
        <a href ="link">Signup?</a>
        </div>
        </div>
        <div className="copyright">
        <small ><p>copyright Ⓒ 2020-21 inclass All rights reserved | Powered by</p>
          <p>Peoplelink Unified Communications Pvt Ltd</p></small>
          </div>
        </form>
      </div>
    </div>
    
    )
}
export default App2;
