import React from "react";
import "./Auth.css";
import AuthLogo from "../../img/logo.png";
const Auth = () => {
  return (
    <div className="auth">
      <div className="a-left">
        <img src={AuthLogo} alt="" />
        <div className="app_name">
          <h1>Minimax Corp</h1>
          <h6>Expand the world through digital connections</h6>
        </div>
      </div>
      {/* <SignUp /> */}
      <Login/>
    </div>
  );
};

const Login = () => {
  return (
    <div className="a-right">
      <form action="" className="info-form authForm">
        <h3>Login</h3>
        <div>
          <input
            type="text"
            placeholder="Username"
            name="username"
            className="infoInput"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="infoInput"
          />
        </div>
        <div>
          <span>Don't have an account? Sign Up!</span>
          <button type="submit" className="button infoButton">Login</button>
        </div>
      </form>
    </div>
  );
};

const SignUp = () => {
  return (
    <div className="a-right">
      <form action="" className="info-form authForm">
        <h3>Sign Up</h3>
        <div>
          <input
            type="text"
            placeholder="First Name"
            name="first_name"
            className="infoInput"
          />
          <input
            type="text"
            placeholder="Last Name"
            name="last_name"
            className="infoInput"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Username"
            name="username"
            className="infoInput"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="infoInput"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirm_password"
            className="infoInput"
          />
        </div>
        <div>
          <span>Already have an account? Login!</span>

        </div>
        <button type="submit" className="button infoButton">Sign Up</button>
      </form>
    </div>
  );
};

export default Auth;
