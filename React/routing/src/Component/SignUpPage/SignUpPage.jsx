import React, { useState } from "react";
import "./App.css";
function SignUpForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobile: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };
  return (
    <React.Fragment>
      <div className="main-page">
        <form onSubmit={handleSubmit}>
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </label>
          <br />

          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </label>
          <br />

          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <br />

          <label>
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </label>
          {/* <br />
        <label>
          Mobile:
          <input
            type="number"
            name="Mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </label> */}
          <br />
          <br />
          <button type="Submit">Sign Up</button>
        </form>
        <div className="submit-data">
          <h3>
            First Name:
            <strong>{formData.firstName}</strong>
          </h3>
          <h3>
            Last Name:<strong>{formData.lastName}</strong>
          </h3>
          <h3>
            Email:<strong>{formData.email}</strong>
          </h3>
          <h3>
            password:<strong>{formData.password}</strong>
          </h3>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SignUpForm;
