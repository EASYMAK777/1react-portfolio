import React from 'react';

import { Navbar, Nav, Container,  } from "react-bootstrap";
import { Link, useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation();
    return (

        <Container>
            

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Link to="/react-portfolio"
            className={location.pathname === "/react-portfolio" ? "nav-link active" : "nav-link"}>
            Juan P Flores
          </Link>
          
          
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              
              <Link to="/Portfolio"
                className={location.pathname === "/Portfolio" ? "nav-link active" : "nav-link"}>
                Portfolio
              </Link>
              
              <Link to="/Contact"
              className={location.pathname === "/Contact" ? "nav-link active" : "nav-link"}>
              Contact
              </Link>

              <Link to="/Resume"
              className={location.pathname === "/Resume" ? "nav-link active" : "nav-link"}>
                Resume
              </Link>
              
            </Nav>
            <Nav>
              <Nav.Link href="https://www.linkedin.com/in/juan-flores-aa28271b2/">Linked-In</Nav.Link>
              
              <Nav.Link href="https://github.com/EASYMAK777">Github Profile</Nav.Link>
            
            
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        </Container>







    );
}

export default Header;