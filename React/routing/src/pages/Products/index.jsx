import React from "react";
import Header from "../../Component/Header";
import Footer from "../../Component/Footer";
import ProductCard from "../../Component/ProductCard";
import "./style.css";

function Products() {
  return (
    <React.Fragment>
      <Header />
      <div className="product-container">
        <ProductCard />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Products;
