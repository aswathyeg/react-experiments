import React from "react";
import { useState } from "react";
import LogoText from "./../logo-text.svg";
import { useNavigate } from "react-router-dom";
import "./../App.scss";
import { Container, Nav, Navbar, NavDropdown, NavLink } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [value, setValue] = useState(0);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();

  const clickLogo = () => {
    navigate("/");
  };
  const clickAbout = () => {
    navigate("/about");
  };
  const clickCloud = () => {
    navigate("/cloud");
  };
  const clickAdmin = () => {
    navigate("/admin");
  };
  const clickTeachers = () => {
    navigate("/teachers");
  };
  const clickStudents = () => {
    navigate("/students");
  };
  const clickLogin = () => {
    navigate("/login");
  };

  return (
    <Navbar collapseOnSelect expand="md">
      <Container>
        <Navbar.Brand>
          <a
            className={
              "ol-header-logo d-flex justify-content-start align-items-center"
            }
            href="/"
          >
            <img
              src={LogoText}
              className="App-logo"
              alt="brand"
              onClick={clickLogo}
            />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ol-menu-width justify-content-end ol-nav-item">
            <Nav.Item className={"ol-nav-item"}>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item className={"ol-nav-item"}>
              <NavDropdown title="Features" id="nav-dropdown">
                <NavDropdown.Item eventKey="4.1" onClick={clickCloud}>
                  Educators
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey="4.2" onClick={clickAdmin}>
                  Learners
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey="4.3" onClick={clickTeachers}>
                  Parents
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey="4.4" onClick={clickStudents}>
                  Moderators
                </NavDropdown.Item>
              </NavDropdown>
            </Nav.Item>
            <Nav.Item className={"ol-nav-item"}>
              <Nav.Link eventKey="Solutions" onClick={clickAbout}>
                About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className={"ol-nav-item"}>
              <Nav.Link eventKey="Login" onClick={clickLogin}>
                {" "}
                Login{" "}
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
