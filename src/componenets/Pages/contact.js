import React from 'react';
import { Container, Row } from 'react-bootstrap';
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
                    <Form />
                </Row>
                <Row>
                    <Foot />
                </Row>
                
            </Container>






        </div>
    );
};

export default Contact;