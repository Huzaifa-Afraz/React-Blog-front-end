import React from 'react'
import { Container, Row, Col, Stack, Image, Nav} from "react-bootstrap";
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <footer className='bg-body-tertiary'>
      <Container >
        <Row className='text-black py-4'>
          <Col className=''>
            <Stack>
              <Image 
              src='/img/logo.png'
              rounded
              width={150}
              height={150}
              />
              <h2>Huzaifa Blog</h2>
              <p>Blog about tech, life, and everything in between</p>
            </Stack>
          </Col>
          <Col >
             <Nav className='flex-column align-items-center'>
              <h4 className='h5'>Useful links</h4>
              <Link className='nav-link' to="/">Home</Link>
                  <Link className='nav-link' to="/create">Write</Link>
                  <Link className='nav-link' to="/login">Login</Link>
                  <Link className='nav-link' to="/register">Register</Link>
             </Nav>
          </Col>
          <Col>
          <h4>Contact us!</h4>
          <p>huzaifaafraz90@gmail.com</p>
          <p>+923111553572</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

