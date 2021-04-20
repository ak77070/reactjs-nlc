import React from 'react'
import './style.css';
import { Container, Row, Col } from 'react-bootstrap';


function StakingCards() {
    return (
        <>
            <Container className="staking p-3">
                <Row className="stakingcards">
                    <Col md={4}>
                        <div className="stakingcard ml-0">
                            <div className="cardcontent">
                                <h6 className="stakingtxt">Amount to Deposit</h6>
                            </div>
                            <div className="cardinput">
                                <input />
                            </div>
                            <div className="cardbtn">
                                <button className="button stakingbtn text-uppercase">Deposit </button>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="stakingcard">
                            <div className="cardcontent">
                                <h6 className="stakingtxt">Amount to Withdraw</h6>
                            </div>
                            <div className="cardinput">
                                <input />
                            </div>
                            <div className="cardbtn">
                                <button className="button stakingbtn text-uppercase">Withdraw </button>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="stakingcard mr-0">
                            <div className="cardcontent">
                                <h6 className="stakingtxt">Claim Rewards</h6>
                            </div>
                            <div className="cardinput">
                                <input />
                            </div>
                            <div className="cardbtn">
                                <button className="button stakingbtn text-uppercase">Claim </button>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Container className="stats">
                    <Row>
                        <Col>
                            <h6 className="stakingtxt">Your Stats</h6>
                        </Col>
                    </Row>
                    <Row className="statsdata">
                        <Col md={3}>
                            <p className="sctxt1">Available LP</p>
                            <p>123.456</p>
                        </Col>
                        <Col md={3}>
                            <p className="sctxt1">Amount Staked</p>
                            <p>123.456</p>
                        </Col>
                        <Col md={3}>
                            <p className="sctxt1">Claimable NLIFE</p>
                            <p>5.4321</p>
                        </Col>
                        <Col md={3}>
                            <p className="sctxt1">Total Rewards</p>
                            <p>7.899</p>
                        </Col>
                    </Row>
                </Container>
            </Container>

            
        </>
    )
}

export default StakingCards
