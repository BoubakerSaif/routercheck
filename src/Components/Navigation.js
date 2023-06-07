import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">VIDAP</Navbar.Brand>
          <Nav className="me-auto">
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "white",
                marginRight: "10px",
              }}
            >
              Home
            </Link>
            <Link
              to="/services"
              style={{ textDecoration: "none", color: "white" }}
            >
              Services
            </Link>
            <Link
              style={{
                textDecoration: "none",
                color: "white",
                marginLeft: "10px",
              }}
            >
              Profile
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
