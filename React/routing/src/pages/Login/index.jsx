import React from "react";
import "./style.css";

function Login() {
  console.log("hello login page");

  return (
    <React.Fragment>
      <form>
        <div className="form-field">
          <input
            type="email"
            placeholder="Email / Username"
            id="email"
            required
          />
        </div>

        <div className="form-field">
          <input
            type="password"
            placeholder="Password"
            id="password"
            required
          />
        </div>

        <div className="form-field">
          <button className="btn" type="button" id="loginBtn">
            Log in
          </button>
        </div>
      </form>
    </React.Fragment>
  );
}

export default Login;
