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
                            <a href ="https://easymak777.github.io/mondo-weather-forecast/">

                            <img
                                width={500}
                                height={500}
                                className="weather-app"
                                src={Weather}
                                alt="weather-app"
                                />
                            </a>
                        </Media>
                    </Col>
                    <Col>
                        <Media>
                            <a href="https://vast-escarpment-44555.herokuapp.com">

                            <img
                                width={500}
                                height={500}
                                className="pokedex-app"
                                src={Pokedex}
                                alt="pokedex-app"
                                />
                            </a>
                        </Media>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Media>
                            <a href="https://amplifiyourlife.herokuapp.com">

                            <img
                                width={500}
                                height={500}
                                className="amplifi-app"
                                src={Amplifi}
                                alt="amplifi-app"
                                />
                            </a>
                        </Media>
                    </Col>
                    <Col>
                        <Media>
                            <a href="https://easymak777.github.io/QC-Watering-hole/">
                            <img
                                width={500}
                                height={500}
                                className="wheres-my-beer-app"
                                src={BeerApp}
                                alt="wheres-my-beer-app"
                            />
                            </a>
                        </Media>
                    </Col>

                </Row>







            </Container>
        </div>


    );
}

export default Projects;