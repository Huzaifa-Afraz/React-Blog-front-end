import React from 'react'
import './navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
export default function Navigationbar() {
  return (
    <>
        <Navbar key="md" expand="md" className="bg-body-tertiary mb-3">
          <Container >
            <Link className='navbar-brand' to="/"><img className='logo' src="./img/logo.png" alt="logo" /></Link>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-md`}
              aria-labelledby={`offcanvasNavbarLabel-expand-md`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                  <img className='logo' src="./img/logo.png" alt="logo" />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Link className='nav-link' to="/">Home</Link>
                  <Link className='nav-link' to="/create">Write</Link>
                  <Link className='nav-link' to="/login">Login</Link>
                  <Link className='nav-link' to="/register">Register</Link>
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </>
  )
}
