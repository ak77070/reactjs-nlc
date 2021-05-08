import React, { Component } from 'react'
import '../style.css';
import { Container, Row, Col } from 'react-bootstrap';

// CSP Achievement images used
import CSP1 from "../../../assets/Achievements/Poker/CSP1.png";
import CSP2 from "../../../assets/Achievements/Poker/CSP2.png";
import CSP3 from "../../../assets/Achievements/Poker/CSP3.png";
import CSP4 from "../../../assets/Achievements/Poker/CSP4.png";
import CSP5 from "../../../assets/Achievements/Poker/CSP5.png";
import CSPFront from "../../../assets/Achievements/Poker/CSPFront.png";

class CSPAchievements extends Component {
    constructor( props ){
        super( props )
        this.state = { 
            show1 : true,
            show2 : true,
            show3 : true,
            show4 : true,
            show5 : true,
        };
    }
    
    toggleNFT1 = () => {
        const { show1 } = this.state;
        this.setState( { show1 : !show1 } )
    }
    toggleNFT2 = () => {
        const { show2 } = this.state;
        this.setState( { show2 : !show2 } )
    }
    toggleNFT3 = () => {
        const { show3 } = this.state;
        this.setState( { show3 : !show3 } )
    }
    toggleNFT4= () => {
        const { show4 } = this.state;
        this.setState( { show4 : !show4 } )
    }
    toggleNFT5 = () => {
        const { show5 } = this.state;
        this.setState( { show5 : !show5 } )
    }
    
    render() {
        return (
            <>
                <Container>
                    <Row>
                        <Col>
                            <h5 className="achtxt1">Carribean Stud Poker</h5>
                            <div className="card-columns achcards">
                                <div onClick={ this.toggleNFT1 } className="achcard">
                                    { this.state.show1 ? <img src={CSPFront} className="achimg"  alt="CSP Achievement"/> : <img src={CSP1} className="achimg"  alt="Blackjack Achievement"/> }
                                </div>
                                <div onClick={ this.toggleNFT2 } className="achcard">
                                    { this.state.show2 ? <img src={CSPFront} className="achimg"  alt="CSP Achievement"/> : <img src={CSP2} className="achimg"  alt="Blackjack Achievement"/> }
                                </div>
                                <div onClick={ this.toggleNFT3 } className="achcard">
                                    { this.state.show3 ? <img src={CSPFront} className="achimg"  alt="CSP Achievement"/> : <img src={CSP3} className="achimg"  alt="Blackjack Achievement"/> }
                                </div>
                                <div onClick={ this.toggleNFT4 } className="achcard">
                                    { this.state.show4 ? <img src={CSPFront} className="achimg"  alt="CSP Achievement"/> : <img src={CSP4} className="achimg"  alt="Blackjack Achievement"/> }
                                </div>
                                <div onClick={ this.toggleNFT5 } className="achcard">
                                    { this.state.show5 ? <img src={CSPFront} className="achimg"  alt="CSP Achievement"/> : <img src={CSP5} className="achimg"  alt="Blackjack Achievement"/> }
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default CSPAchievements
