import React, { Component } from 'react'
// import './style.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

class ImportSeed extends Component {
    render() {
        return (
          <>
            <Container fluid className="rsec1">
              <Row>
                <Col>
                  <h2 className="txt1 text-uppercase text-center mb-4 pb-0"> import account </h2>
                  <p className="rtxt2 mb-4 text-uppercase">Welcome Back!</p>
                </Col>
              </Row>
              <Row>
                <Col>
                    <form>
                        Enter Seed Phrase
                        <br></br>
                        <input className="seedinput" />
                    </form>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Link to="/games">
                    <button className="button rbtn text-uppercase mt-5">Continue</button>
                  </Link>
                  <Link to="/CreatePassword" className="forgot mt-2">
                    <p className="mt-2">Forgot Your Password?</p>
                  </Link>
                </Col>
              </Row>
            </Container>
          </>
        )
      }
}

export default ImportSeed
