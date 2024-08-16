import React from 'react'
import './navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
export default function Navigationbar() {
  return (
    <>
        <Navbar key="md" expand="md" className="bg-body-tertiary mb-3">
          <Container >
            <Link className='navbar-brand' to="/"><img className='logo' src="/img/logo.png" alt="logo" /></Link>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-md`}
              aria-labelledby={`offcanvasNavbarLabel-expand-md`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                  <img className='logo' src="/img/logo.png" alt="logo" />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3">
                  <Link className='nav-link' to="/">General</Link>
                  <Link className='nav-link' to="/art">Art</Link>
                  <Link className='nav-link' to="/science">Science</Link>
                  
                  
                  
                  
                  
                  <NavDropdown title="Other Categories" id="collapsible-nav-dropdown">
              <NavDropdown.Item>
              <Link className='nav-link' to="/technology">Technology</Link>
                </NavDropdown.Item>
              <NavDropdown.Item>
              <Link className='nav-link' to="/entertainment">Entertainment</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
              <Link className='nav-link' to="/design">Design</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
              <Link className='nav-link' to="/sports">Sports</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
              <Link className='nav-link' to="/food">Food</Link>
              </NavDropdown.Item>
            </NavDropdown>
                </Nav>
                <div className="d-md-flex align-items-center justify-content-between mt-2">
                  <Link className='btn' to="/login">Login</Link>
                  <Link className='btn btn-primary' to="/register">Register</Link>
                  </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </>
  )
}
