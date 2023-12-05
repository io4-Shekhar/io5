import React from "react";
import Header from "../../Component/Header/index.jsx";
import Footer from "../../Component/Footer/index.jsx";
import ImageSliders from "../../Component/ImageSliders";

const HomePage = () => {
  return (
    <React.Fragment>
      <Header />
      <ImageSliders />
      <Footer />
    </React.Fragment>
  );
};

export default HomePage;
