import React, { Component } from 'react'
import './style.css';
import { Container, Row, Col } from 'react-bootstrap';

import sec4img from "../../assets/Home/sec4img.svg";

class PrivacyPolicy extends Component {
    render() {
        return (
          <>
            <Container fluid className="tnp">
                <Row>
                    <Col>
                        <h2 className="txt1 text-uppercase text-center"> Privacy Policy </h2>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center mb-4">
                        <img src={sec4img} className="objimg" width="auto" height="200px" alt="Night Life Crypto"/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className="tptxt3">TYPES OF DATA COLLECTED</p>
                        <p className="tptxt2"><span>Anonymous Accounts:</span> While using Our Service, we will not ask you for any personally identifiable information, nor do we store such data.</p>
                        <p className="tptxt2"><span>NLIFE Accounts:</span> While using Our Service, we will not ask you for any personally identifiable information, only an email address.</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className="tptxt3">CHANGES TO THE PRIVACY POLICY</p>
                        <p className="tptxt2">We may review the Privacy Policy periodically and reserve the right to change the Privacy Policy at any time at our discretion by posting such changes on the website.</p>
                    </Col>
                </Row>
            </Container>
          </>
        )
      }
}

export default PrivacyPolicy
