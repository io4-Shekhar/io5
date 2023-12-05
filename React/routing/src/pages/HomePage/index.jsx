import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ImageSliders from "../../components/ImageSliders";

function HomePage() {
  return (
    <React.Fragment>
      <Header />
      <ImageSliders />
      <Footer />
    </React.Fragment>
  );
}

export default HomePage;
