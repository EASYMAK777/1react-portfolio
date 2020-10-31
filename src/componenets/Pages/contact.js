import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Form from '../Form/form';

import Header from '../Navbar/header';
import Foot from '../Footer/footer';

function Contact() {
    return(
        <div className="Contact">
            <Container>
                <Row>
                    <Header />
                </Row>
                <Row>
                    <Col>
                    
                    <Form />
                    </Col>
                </Row>
                <Row>
                    <Foot />
                </Row>
                
            </Container>






        </div>
    );
};

export default Contact;