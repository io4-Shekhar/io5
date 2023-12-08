import React from "react";
import Header from "../../Component/Header";
import ContactForm from "../../Component/ContactFrom";
import Footer from "../../Component/Footer";
import SignUpPage from "../../Component/SignUpPage/SignUpPage.jsx";
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
