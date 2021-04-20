import React, { Component } from 'react'
import './style.css';
import { Container, Row, Col } from 'react-bootstrap';

import StakingCards from '../../Components/Cards/staking'

class Staking extends Component {
    render() {
        return (
          <>
            <Container fluid className="ssec">
              <Row>
                <Col className="ssec1">
                  <h2 className="txt1 text-uppercase text-center"> LP Staking </h2>
                </Col>
              </Row>
              <Row>
                <Col className="ssec2">
                  <div>
                    <button className="button ssec2btn text-uppercase">Connect Metamask </button>
                  </div>
                  <div>
                    <h5>OR</h5>
                  </div>
                  <div>
                    <button className="button ssec2btn text-uppercase">Connect Binance Wallet </button>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div>
                    <h5 className="lstxt1">NLIFE/BNB</h5>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <StakingCards/>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div>
                    <h5 className="lstxt1">CAKE/BNB</h5>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <StakingCards/>
                </Col>
              </Row>
            </Container>
          </>
        )
      }
}

export default Staking
