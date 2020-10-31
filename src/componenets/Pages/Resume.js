import React from 'react';
import Header from "../Navbar/header";
import Foot from '../Footer/footer';
import { Container, Row } from 'react-bootstrap';
import Resume from '../Resume/resume';

function ResumePage() {
    return(
        <div className="Resume-page">
            <Container>
                    <Row>
                        <Header />
                    </Row>

               
                    <Row>
                        <Resume />
                    </Row>

          
                    <Row>
                        <Foot />
                    </Row>

         

            </Container>
        </div>
    );
};

export default ResumePage;