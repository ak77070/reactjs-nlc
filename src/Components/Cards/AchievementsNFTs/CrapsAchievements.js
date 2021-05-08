import React, { Component } from 'react'
import '../style.css';
import { Container, Row, Col } from 'react-bootstrap';

// Craps Achievement images used
import Craps1 from "../../../assets/Achievements/Craps/Craps1.png";
import Craps2 from "../../../assets/Achievements/Craps/Craps2.png";
import Craps3 from "../../../assets/Achievements/Craps/Craps3.png";
import Craps4 from "../../../assets/Achievements/Craps/Craps4.png";
import Craps5 from "../../../assets/Achievements/Craps/Craps5.png";
import CrapsFront from "../../../assets/Achievements/Craps/CrapsFront.png";

class CrapsAchievements extends Component {

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
                            <h5 className="achtxt1">Craps</h5>
                            <div className="card-columns achcards">
                                <div onClick={ this.toggleNFT1 } className="achcard">
                                    { this.state.show1 ? <img src={CrapsFront} className="achimg"  alt="Craps Achievement"/> : <img src={Craps1} className="achimg"  alt="Craps Achievement"/> }
                                </div>
                                <div onClick={ this.toggleNFT2 } className="achcard">
                                    { this.state.show2 ? <img src={CrapsFront} className="achimg"  alt="Craps Achievement"/> : <img src={Craps2} className="achimg"  alt="Craps Achievement"/> }
                                </div>
                                <div onClick={ this.toggleNFT3 } className="achcard">
                                    { this.state.show3 ? <img src={CrapsFront} className="achimg"  alt="Craps Achievement"/> : <img src={Craps3} className="achimg"  alt="Craps Achievement"/> }
                                </div>
                                <div onClick={ this.toggleNFT4 } className="achcard">
                                    { this.state.show4 ? <img src={CrapsFront} className="achimg"  alt="Craps Achievement"/> : <img src={Craps4} className="achimg"  alt="Craps Achievement"/> }
                                </div>
                                <div onClick={ this.toggleNFT5 } className="achcard">
                                    { this.state.show5 ? <img src={CrapsFront} className="achimg"  alt="Craps Achievement"/> : <img src={Craps5} className="achimg"  alt="Craps Achievement"/> }
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default CrapsAchievements
