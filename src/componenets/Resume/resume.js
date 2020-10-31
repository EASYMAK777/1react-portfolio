import React from 'react';
import { Container, Row } from 'react-bootstrap';
import pdf from '../Resume/Resume.pdf'





function Resume() {
    return(
        <div className="Resume">
            <Container>
                <Row>
                    <div className="pdf">
                        <a href={pdf}></a>

                    </div>

                </Row>
               
            </Container>
        </div>
    );
};

export default Resume;