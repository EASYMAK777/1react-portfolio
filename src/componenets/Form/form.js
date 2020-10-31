import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './form.css';
import { db } from '../Firebase/firebase';
// import './App.css';

const Form = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  return(

    <Container>
      <Row>
        <Col>
        
    <form className="form">
      <h1>Contact Form 📧 </h1>

      <label>Name</label>
      <input placeholder="Name"/>

      <label>Email</label>
      <input placeholder="Email"/>

      <label>Mesesage</label>
      <textarea placeholder="Message"></textarea>

      <button type="submit">Submit</button>


    </form>
        
        </Col>
      </Row>
    </Container>









  );
};

export default Form;