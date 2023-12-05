import React from "react";
import "./style.css";
import Button from "react-bootstrap/Button";

function ContactForm() {
  return (
    <>
      <div className="contact-container">
        <h2 className="h2">
          So, What are you waiting for? Let's build your dream project!
        </h2>
        <p className="para">
          Get interesting housing info straight to your inbox, and build the
          building you want. Contact us
        </p>
        <div className="button-container">
          <Button className="button">Contact Us</Button>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
