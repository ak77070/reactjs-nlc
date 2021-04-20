import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './style.css';

import footerimg from "../../assets/Footer/footerimg.svg";
import footerlogo from "../../assets/Footer/footerlogo.svg";

// Icons used
import { FaInstagram, FaTwitter, FaYoutube, FaDiscord, FaMediumM, FaTelegramPlane } from 'react-icons/fa';
import {GiSailboat} from 'react-icons/gi';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
        <div>
            <Container fluid className="footer">
                <Row className="foot1">
                    <Col>
                        <img src={footerimg} className="footerimg" width='40%' height='auto' alt='powered by' />
                    </Col>
                </Row>
                <Row className="foot1 p-4">
                    <Col>
                    <Link to="/nlc" className="ppntos">
                        <img src={footerlogo} className="footerlogo" width='60%' height='auto' alt='logo' />
                    </Link>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ul className="socials list-unstyled">
                            <a href="https://discord.com/invite/9xFMsfupMY" rel="noreferrer" title="Discord" target="_blank" className="discord"><li><FaDiscord /></li></a>
                            <a href="https://www.instagram.com/nightlifecrypto/" rel="noreferrer" title="Instagram" target="_blank" className="instagram"><li><FaInstagram /></li></a>
                            <a href="https://twitter.com/nightlifecrypto" rel="noreferrer" title="Twitter" target="_blank" className="twitter"><li><FaTwitter /></li></a>
                            <a href="https://nightlifecrypto.medium.com" rel="noreferrer" title="Medium" target="_blank" className="medium"><li><FaMediumM /></li></a>
                            <a href="https://t.me/nightlifecrypto" rel="noreferrer" title="Telegram" target="_blank" className="telegram"><li><FaTelegramPlane /></li></a>
                            <a href="https://bittube.tv/profile/NightLifeCrypto" rel="noreferrer" title="Bittube" target="_blank" className="bittube"><li><FaYoutube /></li></a>
                            <a href="https://flote.app/user/nightlifecrypto" rel="noreferrer" title="Flote" target="_blank" className="flote"><li><GiSailboat /></li></a>
                        </ul>
                    </Col>
                </Row>
                <Row className="foot1">
                    <Col>
                        <p className="m-0">
                        &copy;{new Date().getFullYear()} Night Life Labs. All rights reserved
                        </p>
                    </Col>
                </Row>
                <Row className="foot1">
                    <Col>
                        <Link to="/nlc/PrivacyPolicy" className="ppntos">
                            Privacy Policy
                        </Link>
                            |  
                        <Link to="/nlc/TermsOfServices" className="ppntos">
                            Terms Of Service
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
  }
}

export default Footer
