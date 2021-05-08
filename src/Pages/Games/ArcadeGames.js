import React, { Component } from 'react'
// import './style.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

import arcadeGame1 from "../../assets/Games/Arcades/arcadeGame1.png";

class ArcadeGames extends Component {
    render() {
        return (
            <>
                <Container>
                    <Row>
                        <Col  className="mb-3">
                            <Link to="/nlc/WebGLGame">
                                <img src={arcadeGame1} className="gamesimg" width="100%" height="auto" alt="NLIFE Games"/>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default ArcadeGames
