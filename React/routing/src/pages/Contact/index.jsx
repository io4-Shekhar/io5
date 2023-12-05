import React from "react";
import Header from "../../Component/Header";
import Footer from "../../Component/Footer";
import ContactForm from "../../Component/ContactFrom";
import "./style.css";
function Contact() {
  return (
    <React.Fragment>
      <Header />
      <ContactForm />
      <Footer />
    </React.Fragment>
  );
}

export default Contact;
