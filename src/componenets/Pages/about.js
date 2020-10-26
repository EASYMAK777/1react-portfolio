import React from 'react';
import { Container, Row, Col, } from 'react-bootstrap';
// import './App.css';
import Header from "../Navbar/header";
import Bio from '../Bio/bio'
import Foot from '../Footer/footer'

function About() {
  return (
    <div className="App">
      <Container>
       
       {/* Importing Header Component */}
        <Row>
          <Col>
            <Header />    
          </Col>
        </Row>

      {/* Import Bio Component */}
    
        <Row>
          <Col>
            <Bio/> 
          </Col>
        </Row>
            
            
        <Row>
          <Col>
            <Foot/>
          </Col>
        </Row>
      </Container>
    </div>











  );
}

export default About;

