import React, { Component } from 'react'
// import './style.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

class GenerateSeed extends Component {
    state={
        value:"Hello there, this is some text in a text area"
    }

    render() {
        return (
          <>
            <Container fluid className="rsec1">
              <Row>
                <Col>
                  <h2 className="txt1 text-uppercase text-center mb-0 pb-0"> Your Seed Phrase </h2>
                  <p className="rtxt2 mb-4 text-uppercase">make sure to copy this down. we do not keep records of seed phrase. if you lose your seed phrase, it can only be recoveredif you are already logged in.</p>
                </Col>
              </Row>
              <Row>
                <Col>
                    <form>
                        <textarea value={this.state.value} />
                    </form>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Link to="/nlc/games">
                    <button className="button rbtn text-uppercase mt-5">Continue</button>
                  </Link>
                </Col>
              </Row>
            </Container>
          </>
        )
      }
}

export default GenerateSeed
