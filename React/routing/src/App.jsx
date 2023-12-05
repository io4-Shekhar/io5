import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/index.jsx";
import About from "./pages/About/index.jsx";
import Contact from "./pages/Contact/index.jsx";
import Products from "./pages/Products/index.jsx";
import Login from "./pages/Login/index.jsx";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/home-page" element={<HomePage />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
