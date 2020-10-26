import React from 'react';
import { Container, Row, Media, Col } from 'react-bootstrap';
import Weather from "../img/weather-app.png";
import Pokedex from "../img/pokedex.gif";
import Amplifi from "../img/amplifi-profile.PNG";
import BeerApp from "../img/wheres-my-beer.jpg.png";

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
                                src={Weather}
                                alt="weather-app"
                            />
                        </Media>
                    </Col>
                    <Col>
                        <Media>
                            <img
                                width={500}
                                height={500}
                                className="pokemon-app"
                                src={Pokedex}
                                alt="pokedex-app"
                            />
                        </Media>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Media>
                            <img
                                width={500}
                                height={500}
                                className="amplifi-app"
                                src={Amplifi}
                                alt="amplifi-app"
                            />
                        </Media>
                    </Col>
                    <Col>
                        <Media>
                            <img
                                width={500}
                                height={500}
                                className="wheres-my-beer-app"
                                src={BeerApp}
                                alt="wheres-my-beer-app"
                            />
                        </Media>
                    </Col>

                </Row>







            </Container>
        </div>


    );
}

export default Projects;