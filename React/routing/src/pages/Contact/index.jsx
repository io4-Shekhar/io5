import React from "react";
import Header from "../../Component/Header";
import ContactForm from "../../Component/ContactFrom";
import SignUpPage from "../../Component/SignUpPage";
import Footer from "../../Component/Footer";
import "./style.css";
function Contact() {
  return (
    <React.Fragment>
      <Header />
      <ContactForm />
      <SignUpPage />
      <Footer />
    </React.Fragment>
  );
}

export default Contact;
