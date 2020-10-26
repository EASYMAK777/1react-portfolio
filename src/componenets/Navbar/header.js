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
              
            </Nav>
            <Nav>
              <Link to="/linked-in"
              className={location.pathname === "/linked-in" ? "nav-link active" : "nav-link"}>
                Linked-in
                </Link>
              
              <Link to ="/memes"
              className={location.pathname === "/resume" ? "nav-link active" : "nav-link"}>
                Dank Coder memes
              </Link>
            
            
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        </Container>







    );
}

export default Header;