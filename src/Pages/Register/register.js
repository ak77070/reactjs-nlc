import React, { Component } from 'react'
import './style.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

class Registration extends Component {
    render() {
        return (
          <>
            <Container fluid className="rsec1">
              <Row>
                <Col>
                  <h2 className="txt1 text-uppercase text-center mb-0 pb-0"> Register </h2>
                  <p className="rtxt2">By creating an account you agree to our </p>
                  <p className="rtxt2 mb-4">
                    <Link to="/PrivacyPolicy" className="ppntos1 m-1">
                        Privacy Policy
                    </Link>
                        &  
                    <Link to="/TermsOfServices" className="ppntos1 m-1">
                        Terms Of Service
                    </Link>
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Link to="/RegisterOrImport">
                    <button className="button rbtn text-uppercase mt-5">NLIFE Account </button>
                  </Link>
                  <p className="rtxt2 mt-2">Register an email, enables on-chain 2FA and other security measures</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Link to="/CreatePassword">
                      <button type="button" className="button rbtn text-uppercase mt-5">Anonymous Account</button>
                  </Link>
                  <p className="rtxt2 mt-2">No email needed, access your account via seed phrase</p>
                </Col>
              </Row>
            </Container>
          </>
        )
      }
}

export default Registration
