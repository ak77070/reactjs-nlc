import React, { Component } from 'react'
// import './style.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

import gamesimg1 from "../../assets/Games/gamesimg1.svg";
import gamesimg2 from "../../assets/Games/gamesimg2.svg";
import gamesimg3 from "../../assets/Games/gamesimg3.svg";
import gamesimg4 from "../../assets/Games/gamesimg4.svg";
import gamesimg5 from "../../assets/Games/gamesimg5.svg";

class CasinoGames extends Component {
    render() {
        return (
            <>
                <Container>
                    <Row>
                        <Col md={6} className="mb-3">
                            <Link to="/Roulette">
                                <img src={gamesimg4} className="gamesimg" width="100%" height="auto" alt="NLIFE Games"/>
                            </Link>
                        </Col>
                        <Col md={6} className="mb-3">
                            <Link to="/Slots">
                                <img src={gamesimg5} className="gamesimg" width="100%" height="auto" alt="NLIFE Games"/>
                            </Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} className="mb-3">
                            <Link to="#">
                                <img src={gamesimg1} className="gamesimg" width="100%" height="auto" alt="NLIFE Games"/>
                            </Link>
                        </Col>
                        <Col md={6} className="mb-3">
                            <Link to="#">
                                <img src={gamesimg2} className="gamesimg" width="100%" height="auto" alt="NLIFE Games"/>
                            </Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} className="mb-3">
                            <Link to="#">
                                <img src={gamesimg3} className="gamesimg" width="100%" height="auto" alt="NLIFE Games"/>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default CasinoGames
