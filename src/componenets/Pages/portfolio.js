import React from 'react';

import {Container, Row} from 'react-bootstrap';
import Header from '../Navbar/header'

import Projects from '../Projects/projects'

function Portfolio() {
    return(
        <div className="portfolio">
            <Container>
                <Row>
                    <Header/>
                </Row>
                <Row>
                    <Projects/>
                </Row>
            </Container>
        </div>
    );
}



export default Portfolio;