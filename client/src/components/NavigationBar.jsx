import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, useLocation } from "react-router-dom";
import { useUserAuth } from "../contexts/UserAuthContext";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';


const NavigationBar = () => {
  let [navbarScroll, setNavbarScroll] = useState(false);
  const { user } = useUserAuth();

  let navigate = useNavigate();

  window.addEventListener("scroll", () => {
    setNavbarScroll(window.scrollY >= 80 ? true : false);
  });

  return (
    <Navbar
      className={navbarScroll ? "custom-navbar scrolled" : "custom-navbar"}
      expand="lg"
      sticky="top"
      variant="light" // Change the variant to "light" for a light-themed navbar
    >
      <Container>
        <Navbar.Brand
          as={NavLink}
          className={`custom-navbar-brand ${navbarScroll ? "scrolled" : ""}`}
          to="/"
          style={{ color: 'black' }} // Change the color of the brand text
        >
          InnerMind Oasis
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              as={NavLink}
              to="/"
              className={`custom-navbar-link ${navbarScroll ? "scrolled" : ""}`}
              style={{ color: 'black' }} // Change the color of the link text
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/contact-us"
              className={`custom-navbar-link ${navbarScroll ? "scrolled" : ""}`}
              style={{ color: 'black' }} // Change the color of the link text
            >
              Contact Us
            </Nav.Link>
          </Nav>
          <Nav>
            {/* While signin on home Dashboard button on navbar works but not changing url. */}
            {user ? (
              <Button
                to="/dashboard/write-new"
                className={`custom-navbar-link navbar-buttons shadow ${
                  navbarScroll ? "scrolled" : ""
                }`}
                onClick={() => {
                  navigate("/dashboard/write-new");
                }}
                style={{ backgroundColor: 'purple', borderColor: 'purple' }} // Change the color of the button
              >
                Dashboard
              </Button>
            ) : (
              <Nav>
                <Button
                  to="/login"
                  className={`custom-navbar-link navbar-buttons shadow me-2 ${
                    navbarScroll ? "scrolled" : ""
                  }`}
                  onClick={() => {
                    navigate("/login");
                  }}
                  style={{ backgroundColor: 'purple', borderColor: 'purple' }} // Change the color of the button
                >
                  Login
                </Button>
                <Button
                  to="/signup"
                  className={`custom-navbar-link navbar-buttons shadow me-2 ${
                    navbarScroll ? "scrolled" : ""
                  }`}
                  onClick={() => {
                    navigate("/signup");
                  }}
                  style={{ backgroundColor: 'purple', borderColor: 'purple' }} // Change the color of the button
                >
                  Signup
                </Button>
              </Nav>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
