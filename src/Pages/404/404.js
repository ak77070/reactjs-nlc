import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';

var wrapper={
    background: "radial-gradient(circle, #f6af2e, #c96a32)",
    overflow: "hidden",
}

var Heading1={
    fontSize:"4vw",
    textAlign: "center",
    color:"292828",
    textTransform: "uppercase",
    margin:"20vh 0",
}

class PageNotFound extends Component {
    render() {
        return (
        <>
            <Container fluid style={wrapper}>
                <Row>
                    <Col>
                        <h1 style={Heading1}>Error 404: page not found</h1>
                    </Col>
                </Row>
            </Container>
        </>
        )
    }
}

export default PageNotFound