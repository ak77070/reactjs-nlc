import React, { Component } from 'react'
import '../style.css';
import { Container, Row, Col } from 'react-bootstrap';

// Blackjack Achievement images used
import Blackjack1 from "../../../assets/Achievements/Blackjack/Blackjack1.png";
import Blackjack2 from "../../../assets/Achievements/Blackjack/Blackjack2.png";
import Blackjack3 from "../../../assets/Achievements/Blackjack/Blackjack3.png";
import Blackjack4 from "../../../assets/Achievements/Blackjack/Blackjack4.png";
import Blackjack5 from "../../../assets/Achievements/Blackjack/Blackjack5.png";

class BlackjackAchievements extends Component {

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
                            <div className=" achcards">
                                <div onClick={ this.toggleNFT1 } className="card-containe achcard">
                                    { this.state.show1 && <img src={Blackjack1} className="achimg"  alt="Blackjack Achievement"/> }  
                                </div>
                                <div onClick={ this.toggleNFT2 } className="card-containe achcard">
                                    { this.state.show2 && <img src={Blackjack2} className="achimg"  alt="Blackjack Achievement"/> }
                                </div>
                                <div onClick={ this.toggleNFT3 } className="card-containe achcard">
                                    { this.state.show3 && <img src={Blackjack3} className="achimg"  alt="Blackjack Achievement"/> }
                                </div>
                                <div onClick={ this.toggleNFT4 } className="card-containe achcard">
                                    { this.state.show4 && <img src={Blackjack4} className="achimg"  alt="Blackjack Achievement"/> }
                                </div>
                                <div onClick={ this.toggleNFT5 } className="card-containe achcard">
                                    { this.state.show5 && <img src={Blackjack5} className="achimg"  alt="Blackjack Achievement"/> }
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

// class BlackjackAchievements extends Component {
//     constructor() {
//       super();
//       this.state = {
//         opacity: 0,
//         thoughts:
//           [
//             "live and let leave",
//             "just pee yourself",
//             "who knows what 'laf' is?"
//           ]
//       }
//     }
  
//     makeAppear = () => {
//       this.setState(
//         prevState => ({opacity: prevState.opacity + 1})
//       );
//     }
  
//     render() {
//       return (
//         <div className="thoughtful-thoughts">
//           <div className="current-thought" style={{opacity: this.state.opacity}}>
//             {this.state.thoughts.map((thought, i) => <p key={i}>{thought}</p>)}
//           </div>
//           <button onClick={this.makeAppear}>Think for me</button>
//         </div>
//       );
//     }
//   }

export default BlackjackAchievements
