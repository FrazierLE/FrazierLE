import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Resume from '../../assets/Resume.pdf'

const NavBarMenu = () => {
  return (
    <Navbar collapseOnSelect expand={false} bg="light">
      <Container fluid style={{display: 'flex', alignItems: 'flex-start'}}>
        <Navbar.Brand href="#home" style={{color: 'rgb(119, 193, 182)', fontSize: '2rem', paddingLeft: '3rem'}}>Lauren's Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" style={{fontSize: '1.5rem'}}>
            <Nav.Link href="/">🏠 Home</Nav.Link>
            <Nav.Link href="/about">About Me</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/skills">Skills</Nav.Link>
            <Nav>
            <NavDropdown title="Connect" id="collasible-nav-dropdown">
              <NavDropdown.Item href="https://www.linkedin.com/in/lauren-frazier-745053188/" target='_blank' style={{fontSize: '1.5rem'}}>LinkedIn</NavDropdown.Item >
              <NavDropdown.Item href="https://github.com/FrazierLE" target='_blank' style={{fontSize: '1.5rem'}}>Github</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href={Resume} download='Frazier, Lauren Resume' target='_blank' style={{fontSize: '1.5rem'}}>Resume</NavDropdown.Item>
            </NavDropdown>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarMenu;