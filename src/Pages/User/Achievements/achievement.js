import React, { useState } from 'react'
import Select from 'react-select';
import '../style.css';
import { Container, Row, Col } from 'react-bootstrap';

import BlackjackAchievements from '../../../Components/Cards/AchievementsNFTs/BlackjackAchievements';
import CSPAchievements from '../../../Components/Cards/AchievementsNFTs/CSPAchievements';
import CrapsAchievements from '../../../Components/Cards/AchievementsNFTs/CrapsAchievements';
import RacingAchievements from '../../../Components/Cards/AchievementsNFTs/RacingAchievements';
import RouletteAchievements from '../../../Components/Cards/AchievementsNFTs/RouletteAchievements';
import SlotsAchievements from '../../../Components/Cards/AchievementsNFTs/SlotsAchievements';
// import AchievementStack from '../../../Components/Carousel/achievementStack';


function Achievement(){

  const NFTs = [
    { value: 0, label: 'All', content: [<BlackjackAchievements/>, <CSPAchievements/>, <CrapsAchievements/>, <RacingAchievements/>, <RouletteAchievements/>, <SlotsAchievements/> ] },
    { value: 1, label: 'Blackjack', content: <BlackjackAchievements/> },
    { value: 2, label: 'Carribean Stud Poker', content: <CSPAchievements/> },
    { value: 3, label: 'Craps', content: <CrapsAchievements/> },
    { value: 4, label: 'Night Life Drifting', content: <RacingAchievements/> },
    { value: 5, label: 'Roulette', content: <RouletteAchievements/> },
    { value: 6, label: 'Slots', content: <SlotsAchievements/> },
  ];

  const [displayNFT, getNFT] = useState();
  const NFThandle = (e) => {
    getNFT(Array.isArray(e) ? e.map(x => x.content):[]);
  }

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
            <Select
              options={NFTs}
              isMulti
              placeholder={"Select NFT..."}
              className="filterNFT"
              onChange={NFThandle}
              defaultValue={{ value: 0, label: 'All' }}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            {displayNFT}
          </Col>
        </Row>
        {/* <Row>
          <Col>
            <AchievementStack/>
          </Col>
        </Row> */}
        {/* <Row>
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
        </Row> */}
      </Container>
    </>
  )
}

export default Achievement
