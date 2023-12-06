import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "./style.css";

function Header() {
  // const date = new getDate();
  // const month = new getmonth();
  // const year = new getyear();

  return (
    <React.Fragment>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="/">Students</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home-page">Home</Nav.Link>
              <Nav.Link href="/about-us">About</Nav.Link>
              <Nav.Link href="/contact-us">Contact</Nav.Link>
              <Nav.Link href="/products">Product</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Mobile</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Laptops</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Electronics
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Headphones
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  );
}

export default Header;
