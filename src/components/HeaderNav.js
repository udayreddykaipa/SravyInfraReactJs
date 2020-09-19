import React from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'

const logo = require('./../logo.jpg')

function Navele(props){
  return (
    <Nav.Link href={props.redir}><Button className="btn btn-light">{props.val}</Button></Nav.Link>
  );
}

function Navi() {
  return (
    <Navbar expand="lg" variant="light" style={{backgroundColor:'#ebf7fc'}}>
      <Navbar.Brand href="#home">
        <img
          src={logo}
          alt="S"
          width="60"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      SRAVYA INFRA
    </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">

        </Nav>
        <Nav>
          <Navele val="Who we are?" redir="#who"></Navele>
          <Navele val="Sites available" redir="#who"></Navele>
          <Navele val="Past Works" redir="#who"></Navele>
          <Navele val="Careers" redir="#who"></Navele>
          <Navele val="About Us" redir="#who"></Navele>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  );
}
export default Navi;
