import React from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import DropdownAdmin from "./admin/DropdownAdmin";
import Brandlogo from "./Brandlogo.png";

function NavAdmin() {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="/">
          <img style={{ width: "70px", height: "70px" }} src={Brandlogo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
        </Navbar.Collapse>
        <Navbar.Brand href="#home">
          <DropdownAdmin />
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default NavAdmin