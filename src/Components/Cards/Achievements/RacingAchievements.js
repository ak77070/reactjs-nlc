import React, { Component } from 'react'
import '../style.css';
import { Container, Row, Col } from 'react-bootstrap';

// Racing Achievement images used
import Racing1 from "../../../assets/Achievements/Racing/Racing1.png";
import Racing2 from "../../../assets/Achievements/Racing/Racing2.png";
import Racing3 from "../../../assets/Achievements/Racing/Racing3.png";
import Racing4 from "../../../assets/Achievements/Racing/Racing4.png";
import Racing5 from "../../../assets/Achievements/Racing/Racing5.png";

class RacingAchievements extends Component {
    constructor( props ){
        super( props )
        this.state = { 
            show1 : false,
            show2 : false,
            show3 : false,
            show4 : false,
            show5 : false,
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
                            <div className="card-columns achcards">
                                <div onClick={ this.toggleNFT1 } className="achcard">
                                    { this.state.show1 && <img src={Racing1} className="achimg"  alt="Blackjack Achievement"/> }
                                </div>
                                <div onClick={ this.toggleNFT2 } className="achcard">
                                    { this.state.show2 && <img src={Racing2} className="achimg"  alt="Blackjack Achievement"/> }
                                </div>
                                <div onClick={ this.toggleNFT3 } className="achcard">
                                    { this.state.show3 && <img src={Racing3} className="achimg"  alt="Blackjack Achievement"/> }
                                </div>
                                <div onClick={ this.toggleNFT4 } className="achcard">
                                    { this.state.show4 && <img src={Racing4} className="achimg"  alt="Blackjack Achievement"/> }
                                </div>
                                <div onClick={ this.toggleNFT5 } className="achcard">
                                    { this.state.show5 && <img src={Racing5} className="achimg"  alt="Blackjack Achievement"/> }
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default RacingAchievements
