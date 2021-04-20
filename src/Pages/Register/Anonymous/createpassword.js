import React, { Component } from 'react'
// import './style.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

class CreatePassword extends Component {
    render() {
        return (
          <>
            <Container fluid className="rsec1">
              <Row>
                <Col>
                  <h2 className="txt1 text-uppercase text-center mb-0 pb-0">Create a Password </h2>
                  <p className="rtxt2 mb-4 text-uppercase">Set your password for this local account</p>
                </Col>
              </Row>
              <Row>
                <Col>
                    <form>
                        <div className="createpassword mb-0">
                            <p className="mr-2">Create Password: </p>
                            <input 
                              name="password"
                              placeholder="Password"
                              required
                            />
                        </div>
                        <div className="passmust">
                          <p>Must be at least 8 characters</p>
                        </div>
                        <br></br>
                        <div className="createpassword">
                            <p className="mr-2">Confirm Password: </p> 
                            <input 
                              type="password"
                              name="password"
                              placeholder="Password"
                              required
                            />
                        </div>
                    </form>
                </Col>
              </Row>
              <Row>
                <Col>
                <form>
                    <label className="checkbox">
                        <input type="checkbox" required/> I have read and agree with the
                        <Link to="/nlc/PrivacyPolicy" className="ppntos1 m-1">
                            Privacy Policy
                        </Link>
                            &  
                        <Link to="/nlc/TermsOfServices" className="ppntos1 m-1">
                            Terms Of Service
                        </Link>
                    </label>
                </form>
                  <Link to="/nlc/Login">
                    <button className="button rbtn text-uppercase">Continue</button>
                  </Link>
                </Col>
              </Row>
            </Container>
          </>
        )
      }
}

export default CreatePassword
