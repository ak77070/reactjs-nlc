import React, { Component } from 'react'
import './style.css';
import { Container, Row, Col } from 'react-bootstrap';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

// Games data
import CasinoGames from './CasinoGames'
import ArcadeGames from './ArcadeGames';

class Games extends Component {
    render() {
        var tab={
          width:"33%", 
          borderRadius:"20px", 
          textAlign:"center", 
          fontWeight: "600", 
          fontSize: "20px",
          textTransform: "uppercase",
          // lineHeight:"3"
        }
        // var tab1={
        //   width:"33%", 
        //   borderRadius:"20px", 
        //   textAlign:"center", 
        //   fontWeight: "600", 
        //   fontSize: "20px",
        //   textTransform: "uppercase",
        // }
        var tabpanel={
          padding: "3%",
          backgroundColor: "rgba(41, 40, 40, 0.3)",
          borderRadius: "20px",
          color:" rgba(255, 255, 255, 0.5)",
          textAlign:"center",
        }
        return (
          <>
              <Container fluid className="gsec1">
                <Row>
                  <Col>
                    <h2 className="txt1 text-uppercase text-center"> Games </h2>
                  </Col>
                </Row>
                <Row className="gsec1-2">
                  <Col className="gsec1-21">
                    <Tabs>
                      <TabList style={{border:"none"}}>
                        <Tab style={tab}>Casino</Tab>
                        <Tab style={tab}>Arcade</Tab>
                        <Tab style={tab}>Trading  Card</Tab>
                      </TabList>

                      <TabPanel style={tabpanel}>
                        <CasinoGames/>
                      </TabPanel>
                      <TabPanel style={tabpanel}>
                        <ArcadeGames/>
                      </TabPanel>
                      <TabPanel style={tabpanel}>
                        <h3>Coming Soon</h3>
                      </TabPanel>
                    </Tabs>
                  </Col>
                </Row>
              </Container>
          </>
        )
      }
}

export default Games
