import React, { Component, Suspense, lazy } from 'react'
import './style.css';
import { Container, Row, Col } from 'react-bootstrap';

// Components used
// import TeamData from '../../Components/Cards/teamdata'
// import Carousel from '../../Components/Carousel/carousel'
// import TokenomicTable from '../../Components/Tables/table'
// import PayoutTable from '../../Components/Tables/payouts'

// Images used
import asec1img from "../../assets/About/asec1img.svg";
import whitepaperpdf from "../../assets/Documents/NLCWhitepaper.pdf"

// Utilities used
import MetaDecorator from '../../Components/Utils/MetaDecorator';
import { WHeading, OHeading } from '../../Components/Headings/Heading';

const TokenomicTable = lazy(() => import('../../Components/Tables/table'));
const PayoutTable = lazy(() => import('../../Components/Tables/payouts'));
const Carousel = lazy(() => import('../../Components/Carousel/carousel'));
const TeamData = lazy(() => import('../../Components/Cards/teamdata'));

class About extends Component {
    render() {
        return (
          <>
            <MetaDecorator
              title={"About Night Life Crypto | DeFi Gaming Industry Leader"} 
              description={"The NLIFE Gaming Platform is proud to bring several technical and strategic firsts” to the online and blockchain gaming industry."}
            />
            
            <Container fluid className="asec1">
              <Row>
                <Col md={6} className="asec1-1">
                  <WHeading text={"What is NLIFE?"} />
                  <p className="pt-3 atxt2">NLIFE is a self-sustaining, all-on-chain gaming platform with zero game transaction fees for users, where users are able to stake liquidity. The NLIFE Gaming Platform brings several technical and strategic "firsts” to the online and blockchain gaming industry. NLIFE achieved these by harnessing the unique properties of Turtle Network in combination with the liquidity options on Pancakeswap.</p>
                  <p className="pt-3 atxt2">Our second layer solution, Turtle Network, allows us to provide users with instant confirmation times for bets and results, as well as allow zero fees for each game transaction. This remarkable distinguishing feature simulating real life gaming experiences. Users start by purchasing tokens on Pancakeswap and sending them to their gaming wallet.</p>
                  <p className="pt-3 atxt2">In the backend, BSC NLIFE tokens will be converted to tokens on Turtle Network and users are ready to play. When withdrawing tokens to your BSC wallet, gas fees are paid in NLIFE instead of BNB. This feature simplifies transactions so that the user does not have hold BNB for withdrawals.</p>
                  <p className="pt-3 atxt2">Lastly, the user's gaming wallet is non-custodial, meaning the user owns the seed phrase to their wallet, allowing the user to have full control, as well as the the only one who can access the wallet. For more infomationn, read our whitepaper.</p>
                  <a href={whitepaperpdf} without="true" rel="noreferrer" target="_blank">
                    <button className="button wbtn text-uppercase mt-4">Whitepaper </button>
                  </a>
                </Col>
                <Col md={6} className="asec1-2">
                  <img src={asec1img} className="asec1img" width="100%" height="auto" alt="NLIFE"/>
                </Col>
              </Row>
            </Container>

            <Suspense fallback={<div/>}>
              <Container fluid className="asec2">
                <Row>
                  <Col className="asec2-1">
                    <OHeading text={"Tokenomics"} />
                  </Col>
                </Row>
                <Row>
                  <Col className="asec2-2">
                    <TokenomicTable className="tokenomictable"/>
                  </Col>
                </Row>
                <Row>
                  <Col className="asec2-3">
                    <OHeading text={"Liquidity pool staking payouts"} />
                  </Col>
                </Row>
                <Row>
                  <Col className="asec2-2">
                    <PayoutTable />
                  </Col>
                </Row>
              </Container>

              <Container fluid className="asec3 asec1">
                <Row className="asec3-1">
                  <Col className="asec3-11">
                    <WHeading text={"Advisors and partners"} />
                  </Col>
                </Row>
                <Row className="asec3-2">
                  <Col className="asec3-21">
                    <TeamData />
                  </Col>
                </Row>
              </Container>

              <Container fluid className="asec4">
                <Row className="asec4-1">
                  <Col className="asec4-11">
                    <OHeading text={"Roadmap"} />
                  </Col>
                </Row>
                <Row className="asec4-2">
                  <Col className="asec4-21">
                    <Carousel />
                  </Col>
                </Row>
              </Container>
            </Suspense>
          </>
        )
      }
}

export default About
