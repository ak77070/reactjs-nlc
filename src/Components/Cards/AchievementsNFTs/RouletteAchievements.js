import React, { Component } from 'react'
import '../style.css';
import { Container, Row, Col } from 'react-bootstrap';

// Roulette Achievement images used
import Roulette1 from "../../../assets/Achievements/Roulette/Roulette1.png";
import Roulette2 from "../../../assets/Achievements/Roulette/Roulette2.png";
import Roulette3 from "../../../assets/Achievements/Roulette/Roulette3.png";
import Roulette4 from "../../../assets/Achievements/Roulette/Roulette4.png";
import Roulette5 from "../../../assets/Achievements/Roulette/Roulette5.png";
import RouletteFront from "../../../assets/Achievements/Roulette/RouletteFront.png";

class RouletteAchievements extends Component {
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
                            <h5 className="achtxt1">Roulette</h5>
                            <div className="card-columns achcards">
                                <div onClick={ this.toggleNFT1 } className="achcard">
                                    { this.state.show1 ? <img src={RouletteFront} className="achimg"  alt="Roulette Achievement"/> : <img src={Roulette1} className="achimg"  alt="Blackjack Achievement"/> }
                                </div>
                                <div onClick={ this.toggleNFT2 } className="achcard">
                                    { this.state.show2 ? <img src={RouletteFront} className="achimg"  alt="Roulette Achievement"/> : <img src={Roulette2} className="achimg"  alt="Blackjack Achievement"/> }
                                </div>
                                <div onClick={ this.toggleNFT3 } className="achcard">
                                    { this.state.show3 ? <img src={RouletteFront} className="achimg"  alt="Roulette Achievement"/> : <img src={Roulette3} className="achimg"  alt="Blackjack Achievement"/> }
                                </div>
                                <div onClick={ this.toggleNFT4 } className="achcard">
                                    { this.state.show4 ? <img src={RouletteFront} className="achimg"  alt="Roulette Achievement"/> : <img src={Roulette4} className="achimg"  alt="Blackjack Achievement"/> }
                                </div>
                                <div onClick={ this.toggleNFT5 } className="achcard">
                                    { this.state.show5 ? <img src={RouletteFront} className="achimg"  alt="Roulette Achievement"/> : <img src={Roulette5} className="achimg"  alt="Blackjack Achievement"/> }
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default RouletteAchievements
