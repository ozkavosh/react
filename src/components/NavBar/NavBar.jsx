import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import logo from "../../img/logo.png";
import CartWidget from "../CartWidget/CartWidget";

import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark" className="pt-2">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img src={logo} alt="" style={{ height: "4rem" }} />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navBar" />
          <Navbar.Collapse id="navBar" className="justify-content-lg-center">
            <Nav className="me-auto">
              <NavLink
                to="/medicamentos"
                className="nav-link"
                activeclassname="active"
              >
                MEDICAMENTOS
              </NavLink>
              <NavLink
                to="/cosmeticos"
                className="nav-link"
                activeclassname="active"
              >
                COSMETICOS
              </NavLink>
              <NavLink
                to="/equipo"
                className="nav-link"
                activeclassname="active"
              >
                EQUIPO
              </NavLink>
            </Nav>

            <CartWidget />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
