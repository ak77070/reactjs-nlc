import React, { Component, Suspense, lazy } from 'react'
import './style.css';  // Stylesheet for the home page
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";   // Link used for buttons

// Components used
// import Card, {Card1} from '../../Components/Cards/card'
// import Carousel from '../../Components/Carousel/carousel'
// import TeamCarousel from '../../Components/Carousel/teamcarousel'
// Utilities used
import MetaDecorator from '../../Components/Utils/MetaDecorator';
import Animation from '../../Components/Utils/JsonAnimation';

// Images used
import sec1img from "../../assets/Home/sec1img.svg";
import splitter from "../../assets/Home/sec1hr.svg"
import sec6img1 from "../../assets/Home/sec6img1.svg"
import sec6img21 from "../../assets/Home/sec6img21.gif"
import sec6img22 from "../../assets/Home/sec6img22.gif"
import sec6hr from "../../assets/Home/sec6hr.svg"

// JSON files used
import Controller from '../../JsonFiles/Controller.json'; 
import Achievement from '../../JsonFiles/Achievement.json';
import Defi from '../../JsonFiles/Defi.json';
import Arrows from '../../JsonFiles/Arrows.json';
import { WHeading, OHeading } from '../../Components/Headings/Heading';

const Card = lazy(() => import('../../Components/Cards/card'));
const Card1 = lazy(() => import('../../Components/Cards/card'));
const Carousel = lazy(() => import('../../Components/Carousel/carousel'));
const TeamCarousel = lazy(() => import('../../Components/Carousel/teamcarousel'));

class index extends Component {
    render() {

        return (
            <>
                <MetaDecorator 
                    title={"Night Life Crypto | The Pioneer of DeFi Gaming & Staking"} 
                    description={"NLife is a self-sustaining, all on-chain gaming platform with zero game transaction fees for users, where users are able to stake liquidity"}
                />

                <Container fluid>
                    <Row>
                        <Col className="herosec p-0">
                            <video src={process.env.PUBLIC_URL + '/Videos/introvid.mp4'} width="100%" height="100%" autoPlay muted/>
                        </Col>
                    </Row>
                </Container>

                <Container fluid className="sec1">
                    <Row>
                        <Col md={6} className="sec1-1">
                            <div className="sec1-11 mb-2">
                                <h2 className="txt1 text-uppercase"> The pioneer of defi gaming </h2>
                                <p className="txt2">Get Paid for Staking Liquidity, Play Games, Gamble and Much More!</p>
                            </div>
                            <div className="sec1-12 btnsec1">
                            <Link to="/nlc/Login" className="ppntos1 m-1">
                                <button className="button homebtn text-uppercase">Login </button>
                            </Link>
                            <Link to="/nlc/Register" className="ppntos1 m-1">
                                <button className="button homebtn text-uppercase">Get Started </button>
                            </Link>
                            </div>
                        </Col>
                        <Col md={6} className="sec1-2">
                            <img src={sec1img} className="sec1img" width="90%" height="auto" alt="sec1img"/>
                        </Col>
                    </Row>
                </Container>

                <Container fluid className="sec2 p-0">
                    <div className="sec2-1">
                        <Row className="sec2-11">
                            <Col className="p-0">
                                <img src={splitter} className="herosplitter" width="100%" height="auto" alt="splitter hr"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="sec2-12">
                                <WHeading text={"Not just another gaming platform"} />
                            </Col>
                        </Row>
                        <Suspense fallback={<div/>}>
                            <Row>
                                <Col className="sec2-13">
                                    <div className="card-columns">
                                        <div className="card">
                                            <div className="cardimgsec">
                                                <Animation animation={Controller} />
                                            </div>
                                            <div className="cardtxt">
                                                <h2 className="txt4">Games</h2>
                                                <p className="txt5">Unlike our competitors, we are producing AAA type Arcade games, an All-On-Chain Casino, Trading Card Games and much more.</p>
                                            </div>
                                        </div>
                                        
                                        <div className="card">
                                            <div className="cardimgsec">
                                                <Animation animation={Achievement} />
                                            </div>
                                            <div className="cardtxt">
                                                <h2 className="txt4">Achievements</h2>
                                                <p className="txt5">For every game we produce, there are 5 achievements that users can attain, and eventually trade with other users, or trade in for prizes!</p>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="cardimgsec">
                                                <Animation animation={Defi} />
                                            </div>
                                            <div className="cardtxt">
                                                <h2 className="txt4">Defi </h2>
                                                <p className="txt5">NLIFE token holders can provide liquidity on Pancakeswap, and stake their liquidity tokens to earn a portion of the fees on sell orders!</p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Suspense>
                    </div>
                </Container>

                <Suspense fallback={<div/>}>
                    <Container fluid className="sec3">
                        <Row>
                            <Col md={6} className="sec3-1">
                                <OHeading text={"The current industry"} />
                                <h4 className="txt6">Current Blockchain Gaming Platforms</h4>
                                <p className="pt-3 txt7">The blockchain gaming industry can be divided into 2 sections: Casinos and Actual Games. Casinos are mostly the same in that they are flashy and claim that they are fair, but they mostly have custodial wallets (where you don't actually control the private key to your own wallet), poor tokenomics, or offer dozens of the same types of games (seriously, go to a random crypto casino and look at how many reskinned slot games there are). On top of that, the few that have their own token have poor tokenomics, as well as transaction fees (if it's on-chain) that the user has to pay.</p>
                                <p className="pt-1 txt7">As for gaming, it's really laughable. Everywhere you look, gaming platforms are making only NFT games, or promise something big but under-deliver. Some of the biggest platforms out there with a significant amount of hype turn out to be duds because of their lack of vision.</p>
                            </Col>
                        </Row>
                    </Container>

                    <Container fluid className="sec4 sec2">
                        <Row>
                            <Col md={6} className="sec4-1 text-center">
                                <img src={sec6img22} className="objimg" width="60%" height="auto" alt="Night Life Crypto"/>
                            </Col>
                            <Col md={6} className="sec4-2">
                                <WHeading text={"Night Life Crypto's Solution"}/>
                                <h2 className="txt6">To Advance Blockchain Gaming</h2>
                                <p className="pt-3 txt7">We are not only producing an on-chain casino, but also AAA type Arcade games that users can get achievements in, which will award them with an NFT. Collect them and trade them in for prizes, or sell them in the upcoming marketplace! Every arcade game will be integrated with the blockchain, and leader boards will be available for each game produced.</p>
                                <p className="pt-3 txt7">Our tokenomics make Night Life Crypto a self-sustaining platform. Users have full control over their wallets by generating a seed phrase as well as the ability to activate the built in on-chain 2FA (or play anonymously if you wish). Users can also stake liquidity and earn NLIFE.</p>
                                <Link to="/nlc/About" className="ppntos1 m-1">
                                    <button className="button homebtn text-uppercase mt-4">Read More </button>
                                </Link>
                            </Col>
                        </Row>
                    </Container>
                </Suspense>

                <Suspense fallback={<div/>}>
                    <Container fluid className="sec5">
                        <div>
                            <Row>
                                <Col className="sec5-11">
                                    <OHeading text={"Our Platform"} />
                                    <p className="text-center mb-0 txt6">What shoots us miles ahead of our competitors</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={5}>
                                    <Card/>
                                </Col>
                                <Col md={2}>
                                </Col>
                                <Col md={5}>
                                    <Card1/>
                                </Col>
                            </Row>
                        </div>
                    </Container>

                    <Container fluid className="sec6 sec2 p-0">
                        <div>
                            <Row className="sec6-1">
                                <Col md={6} className="sec6-11">
                                    <img src={sec6img1} className="objimg pl-3" width="80%" height="auto" alt="Blockchain assets"/>
                                </Col>
                                <Col md={6} className="sec6-12">
                                    <WHeading text={"Tokenomics"} />
                                    <p className="pt-4 txt8"><span>Max Supply:</span> 3,425,000 NLIFE</p>
                                    <p className="txt8"><span>Circulating Supply (At Launch):</span> 800,000 NLIFE</p>
                                    <p className="txt8"><span>Bank (Contract for Casino Winnings):</span> 1,500,000 NLIFE</p>
                                    <div className="pt-3 txt8">
                                        <span>5% Tax on Pancakeswap Sell Orders</span>
                                        <ul className="mb-0">
                                            <li>2.5% goes to Liquidity Stakers</li>
                                            <li>2.0% goes to the project for future development</li>
                                            <li>0.5% goes to partner projects (TBD)</li>
                                        </ul>
                                    </div>
                                    <p className="pt-3 txt8"><span>Presale Token Release Schedule</span></p>
                                    <p className="txt8"><span>At Launch:</span> 250,000 NLIFE</p>
                                    <p className="txt8"><span>Months 1 thru 4:</span> 262,000 NLIFE</p>
                                    <p className="txt8"><span>Months 5 thru 6:</span> 37,500 NLIFE</p>
                                </Col>
                            </Row>
                            <Row className="sec2-11">
                                <Col className="p-0">
                                    <img src={sec6hr} className="splitter" width="100%" height="auto" alt="splitter hr"/>
                                </Col>
                            </Row>
                            <Row className="sec6-2">
                                <Col md={6} className="sec6-12">
                                    <WHeading text={"How It Works"} />
                                    <p className="pt-3 txt7">Users can purchase tokens on Pancakeswap. From there, they generate a seed phrase on our platform (or log in if they have already done so). From there, they send tokens from their BSC wallet to their NLIFE platform wallet. After that, they are able to play any game on the platform!</p>
                                    <p className="pt-3 txt7">For liquidity staking, the user would need to provide liquidity for the NLIFE/BNB pair on Pancakeswap. Afterwards, the user can click on the Staking link at the top menu (or the button below). From there, you connect your Metamask or Binance Smart Chain wallet and enter in the amount of liquidity tokens you would like to stake, then hit stake! The user will get a portion of the transfer fees based on the amount staked vs the total amount staked by all users.</p>
                                    <Link to="nlc/Staking" className="ppntos1 m-1">
                                        <button className="button homebtn text-uppercase mt-4">Stake Liquidity </button>
                                    </Link>
                                </Col>
                                <Col md={6} className="sec6-11">
                                    <div className="sec6-13">
                                        <img src={sec6img21} className="objimg" width="100%" height="auto" alt="Blockchain assets"/>
                                    </div>
                                    <div className="sec6-13">
                                        <Animation animation={Arrows} />
                                    </div>
                                    <div className="sec6-13">
                                        <img src={sec6img22} className="objimg" width="100%" height="auto" alt="Blockchain assets"/>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </Suspense> 

                <Suspense fallback={<div/>}>
                    <Container fluid className="sec7 pb-0">
                        <Row className="sec7-1">
                            <Col>
                                <OHeading text={"Our history and future"} />
                                <h4 className="text-center txt6">Our Roadmap</h4>
                            </Col>
                        </Row>
                        <Row className="sec7-2">
                            <Col>
                                <Carousel />
                            </Col>
                        </Row>
                    </Container>

                    <Container fluid className="sec8 pb-0">
                        <Row className="sec8-1">
                            <Col>
                                <WHeading text={"Our Team & Partners"}/>
                                <h4 className="text-center txt6">Essential to NLIFE Success</h4>
                            </Col>
                        </Row>
                        <Row className="sec8-2">
                            <Col>
                                <TeamCarousel />
                            </Col>
                        </Row>
                    </Container>
                </Suspense>
            </>
        )
    }
}

export default index
