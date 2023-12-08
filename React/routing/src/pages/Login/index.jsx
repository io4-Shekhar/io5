import React from "react";
import "./style.css";

function Login() {
  console.log("hello login page");
  // const [isLoading, setLoading] = React.useState(false);
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  const handleChangeEmail = (e) => {
    setFormData({ ...formData, email: e.target.value });
  };
  function handleChangePW(event) {
    setFormData({ ...formData, password: event.target.value });
  }
  function handleLoginClick(event) {
    setFormData({ ...formData, login: event.target.value });
  }

  return (
    <React.Fragment>
      <form>
        <div className="form-field">
          <input
            type="email"
            placeholder="Email / Username"
            id="email"
            // required
            onchange={handleChangeEmail}
          />
        </div>

        <div className="form-field">
          <input
            type="password"
            placeholder="Password"
            id="password"
            required
            onChange={(e) => handleChangePW(e)}
            value={formData?.password}
            name="password"
          />
        </div>

        <div className="form-field">
          <button
            onClick={handleLoginClick}
            className="btn"
            type="button"
            id="loginBtn"
            title="this is title for checking"
            variant="secondary"
            disabled={
              formData?.email.length < 6 || formData?.password.length < 6
            }
          >
            Log in
          </button>
        </div>
        {(formData?.email.length < 6 || formData?.password.length < 6) && (
          <p style={{ color: "red" }}>
            Please Enter valid
            {formData?.email.length < 6 ? " Email" : " Password"}
          </p>
        )}
      </form>
    </React.Fragment>
  );
}

export default Login;
