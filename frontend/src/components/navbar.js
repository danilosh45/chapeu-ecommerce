import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { LinkContainer } from 'react-router-bootstrap'

export default function NavBarLogo() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav>
            <Nav.Link>info@chapeauwines.com</Nav.Link>
            <Nav.Link>68492840</Nav.Link>
          </Nav>
          <LinkContainer to="/">
            <Navbar.Brand >
              <img
                alt=""
                src="/logochapeu.svg"
                width="50"
                height="50"
                className="d-inline-block align-top "
              />{' '}
            </Navbar.Brand>
          </LinkContainer>
        </Container>
      </Navbar>
    </>
  )
}
