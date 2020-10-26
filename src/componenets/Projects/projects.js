import React from 'react';
import { Container, Row, Media, Col } from 'react-bootstrap';

function Projects() {
    return (
        <div className="projects">
            <Container>
                <Row>
                    <Col>
                        <Media>
                            <img
                                width={500}
                                height={500}
                                className="weather-app"
                                src={require('../img/weather-app.png')}
                                alt="weather-app"
                            />
                        </Media>
                    </Col>
                    <Col>
                        <Media>
                            {/* <img
                                width={500}
                                height={500}
                                className="weather-app"
                                src={require('./QC-wateringhole.gif')}
                                alt="weather-app"
                            /> */}
                        </Media>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Media>
                            {/* <img
                                width={500}
                                height={500}
                                className="weather-app"
                                src={require('./weather-app.gif')}
                                alt="weather-app"
                            /> */}
                        </Media>
                    </Col>
                    <Col>
                        <Media>
                            {/* <img
                                width={500}
                                height={500}
                                className="weather-app"
                                src={require('./weather-app.gif')}
                                alt="weather-app"
                            /> */}
                        </Media>
                    </Col>

                </Row>







            </Container>
        </div>


    );
}

export default Projects;