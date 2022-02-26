import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NavigationBar = () => {
  return (
    <>
      <Navbar expand="lg" variant="dark" className="navbar__bg">
        <Container>
          <LinkContainer to="/" exact>
            <Navbar.Brand className="navbar--brand">Have You Watched?</Navbar.Brand>
          </LinkContainer>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
