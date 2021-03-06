import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './form.css';
import { db } from '../Firebase/firebase';
// import './App.css';

const Form = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const [loader, setLoader] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true)

    db.collection("contacts").add({
      name:name,
      email:email,
      message:message,
    })
    .then(() => {
      alert('message has been submitted, I will contact you shortly');
      setLoader(false);
    })
    .catch((error) => {
      alert(error.message);
      setLoader(false);
    })

    setName('')
    setEmail('')
    setMessage('')


  };

  return(

    <Container>
      <Row>
        <Col>
        
    <form className="form" onSubmit={handleSubmit}>
      <h1>Contact Form 📧 </h1>

      <label>Name</label>
      <input placeholder="Name" value = {name} 
      onChange={(e) => setName(e.target.value) } />

      <label>Email</label>
      <input placeholder="Email" value = {email}
      onChange={(e) => setEmail(e.target.value) } />

      <label>Message</label>
      <textarea placeholder="Message" value ={message}
      onChange={(e) => setMessage(e.target.value) }
      ></textarea>

      <button type="submit" style={{background : loader
      ? "#ccc" : " rgb(2, 2, 110)" }}
      >
      Submit
      </button>


    </form>
        
        </Col>
      </Row>
    </Container>









  );
};

export default Form;