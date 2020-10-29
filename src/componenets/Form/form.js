import React from 'react';
import { Container, Row } from 'react-bootstrap';

// import '../app.css';

const Form = () => {
  return(

    <Container>
      <Row>


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


      </Row>





    </Container>
  );
};

export default Form;