import { React, useContext } from "react";
import "./navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import AuthContext from "../../context/AuthContext";
import { Alert } from "react-bootstrap";
export default function Navigationbar() {
  const { user, logout, logoutalert } = useContext(AuthContext);
  console.log(logout);
  return (
    <>
      <Navbar key="md" expand="md" className="bg-body-tertiary mb-3">
        <Container>
          <Link className="navbar-brand" to="/">
            <img className="logo" src="/img/logo.png" alt="logo" />
          </Link>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                <img className="logo" src="/img/logo.png" alt="logo" />
              </Offcanvas.Title>
            </Offcanvas.Header>
            {/* <span className='text-end'>helo</span> */}
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 pe-3">
                <Link className="nav-link" to="/">
                  General
                </Link>
                <Link className="nav-link" to="/?cat=art">
                  Art
                </Link>
                <Link className="nav-link" to="/?cat=science">
                  Science
                </Link>
                <NavDropdown
                  title="Other Categories"
                  id="collapsible-nav-dropdown"
                >
                  <NavDropdown.Item>
                    <Link className="nav-link" to="/?cat=technology">
                      Technology
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="nav-link" to="/?cat=entertainment">
                      Entertainment
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="nav-link" to="/?cat=design">
                      Design
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="nav-link" to="/?cat=sports">
                      Sports
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link className="nav-link" to="/?cat=food">
                      Food
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>

              <div className="d-md-flex align-items-center justify-content-between mt-2">
                <span className="me-2">{user?.name}</span>
                {user ? (
                  <span className="btn btn-primary" onClick={logout}>
                    Logout
                  </span>
                ) : (
                  <Link className="btn" to="/login">
                    Login
                  </Link>
                )}
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      {logoutalert && <Alert variant="success">{logoutalert}</Alert>}
    </>
  );
}