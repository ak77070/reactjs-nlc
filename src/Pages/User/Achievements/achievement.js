import React, { Component } from 'react'
import '../style.css';
import { Container, Row, Col } from 'react-bootstrap';
import BlackjackAchievements from '../../../Components/Cards/Achievements/BlackjackAchievements';
import CSPAchievements from '../../../Components/Cards/Achievements/CSPAchievements';
import CrapsAchievements from '../../../Components/Cards/Achievements/CrapsAchievements';
import RacingAchievements from '../../../Components/Cards/Achievements/RacingAchievements';
import RouletteAchievements from '../../../Components/Cards/Achievements/RouletteAchievements';
import SlotsAchievements from '../../../Components/Cards/Achievements/SlotsAchievements';


class Achievement extends Component {
    render() {
        return (
          <>
            <Container fluid className="accsec">
              <Row>
                <Col className="accsec1">
                  <h2 className="txt1 text-uppercase text-center"> Achievement NFTS </h2>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h5 className="achtxt1">Blackjack</h5>
                  <BlackjackAchievements/>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h5 className="achtxt1">Carribean Stud Poker</h5>
                  <CSPAchievements/>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h5 className="achtxt1">Craps</h5>
                  <CrapsAchievements/>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h5 className="achtxt1">Night Life Drifting</h5>
                  <RacingAchievements/>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h5 className="achtxt1">Roulette</h5>
                  <RouletteAchievements/>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h5 className="achtxt1">Slots</h5>
                  <SlotsAchievements/>
                </Col>
              </Row>
            </Container>
          </>
        )
      }
}

export default Achievement
