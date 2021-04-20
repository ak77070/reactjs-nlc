import React, { Component } from 'react'
import '../style.css';
import { Container, Row, Col } from 'react-bootstrap';

import DepositModal, { WithdrawModal } from '../../../Components/Modal/userModal'

class Account extends Component {
    render() {
        return (
          <>
            <Container fluid className="accsec">
              <Row>
                <Col className="accsec1">
                  <h2 className="txt1 text-uppercase text-center"> User Account </h2>
                </Col>
              </Row>
              <Row>
                <Col className="accsec2">
                  <p className="acctxt2"><span>Your NLIFE Address: </span> XXXXXXXXXXXXXXXXXXXX </p>
                  <p className="acctxt2"><span>User Balance: </span> XX.XXXX NLIFE</p>
                </Col>
              </Row>
              <Row>
                <Col className="accsec3">
                  {/* <button className="button acc2btn text-uppercase">Deposit NLIFE </button> */}
                  <DepositModal />
                  {/* <button className="button acc2btn text-uppercase">Withdraw NLIFE </button> */}
                  <WithdrawModal />
                </Col>
              </Row>
              <Row>
                <Col className="accsec4 mb-2">
                  <div>
                    <h5 className="acctxt1">10 most recent transactions</h5>
                  </div>
                </Col>
              </Row>
              <Container className="accsec5">
                <Row>
                  <Col sm={3}>
                    <h5 className="acctxt1">Type</h5>
                  </Col>
                  <Col sm={3}>
                    <h5 className="acctxt1">Amount</h5>
                  </Col>
                  <Col sm={6}>
                    <h5 className="acctxt1">From</h5>
                  </Col>
                </Row>
              </Container>
            </Container>
          </>
        )
      }
}

export default Account
