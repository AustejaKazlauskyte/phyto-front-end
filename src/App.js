import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <img className="wave" src="wave.png"/>
        <div className="container">
          <div className="img">
            {/*<img src="plants.svg"/>*/}
            <img src="standing-11.svg"/>
          </div>
          <div className="login-content">
            <form action="index.html">
              <div className="avatar-transform">
              <img src="Curly.svg"/>
              </div>
                <h2 className="title">Welcome</h2>
                <div className="input-div one">
                  <div className="i">
                    <i className="fas fa-user"></i>
                  </div>
                  <div className="div">
                    <h5>Username</h5>
                    <input type="text" className="input"/>
                  </div>
                </div>
                <div className="input-div pass">
                  <div className="i">
                    <i className="fas fa-lock"></i>
                  </div>
                  <div className="div">
                    <h5>Password</h5>
                    <input type="password" className="input"/>
                  </div>
                </div>
                <a href="#">Forgot Password?</a>
                <input type="submit" className="btn" value="Login"/>
            </form>
          </div>
        </div>
    </div>
  );
}

export default App;
