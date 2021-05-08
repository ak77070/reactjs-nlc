import React, { Component } from 'react'
import '../style.css';
import { Container, Row, Col } from 'react-bootstrap';

// import ReactCardCarousel from "react-card-carousel";

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// Blackjack Achievement images used
import Blackjack1 from "../../../assets/Achievements/Blackjack/Blackjack1.png";
import Blackjack2 from "../../../assets/Achievements/Blackjack/Blackjack2.png";
import Blackjack3 from "../../../assets/Achievements/Blackjack/Blackjack3.png";
import Blackjack4 from "../../../assets/Achievements/Blackjack/Blackjack4.png";
import Blackjack5 from "../../../assets/Achievements/Blackjack/Blackjack5.png";
import BlackjackFront from "../../../assets/Achievements/Blackjack/BlackjackFront.png";


class BlackjackAchievements extends Component {

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

    // static get CONTAINER_STYLE() {
    //     return {
    //     //   position: "relative",
    //       height: "auto",
    //       width: "100%",
    //       display: "flex",
    //       flex: 1,
    //       justifyContent: "center",
    //       alignItems: "middle"
    //     };
    //   }
    
    // static get CARD_STYLE() {
    //     return {
    //         width: "100%",
    //         height: "100%"
        //   paddingTop: "80px",
        //   textAlign: "center",
        //   background: "#52C0F5",
        //   color: "#FFF",
        //   fontFamily: "sans-serif",
        //   fontSize: "12px",
        //   textTransform: "uppercase",
        //   borderRadius: "10px",
        //   boxSizing: "border-box"
    //     };
    // }
    
    
    render() {
        // const settings = {
        //     dots: true,
        //     infinite: false,
        //     speed: 500,
        //     slidesToShow: 4,
        //     slidesToScroll: 1,
        //     arrows: false,
        //     cssEase: "linear",
        //     responsive: [
        //         {
        //           breakpoint: 1024,
        //           settings: {
        //             slidesToShow: 4,
        //             slidesToScroll: 1,
        //           }
        //         },
        //         {
        //           breakpoint: 768,
        //           settings: {
        //             slidesToShow: 3,
        //             slidesToScroll: 1,
        //           }
        //         },
        //         {
        //           breakpoint: 480,
        //           settings: {
        //             slidesToShow: 2,
        //             slidesToScroll: 1
        //           }
        //         }
        //     ]
        // };

        return (
            <>
                <Container>
                    <Row>
                        <Col>
                            <h5 className="achtxt1">Blackjack</h5>
                            {/* Add this styling for container "style={BlackjackAchievements.CONTAINER_STYLE}" */}
                            <div className="achcards">
                                {/* <Slider {...settings}> */}
                                {/* <ReactCardCarousel > */}
                                    {/* Add this styling for card " style={BlackjackAchievements.CARD_STYLE}" */}
                                    <div onClick={ this.toggleNFT1 } className="card-containe achcard">
                                        { this.state.show1 ? <img src={BlackjackFront} className="achimg"  alt="Blackjack Achievement"/> : <img src={Blackjack1} className="achimg"  alt="Blackjack Achievement"/> }  
                                    </div>
                                    <div onClick={ this.toggleNFT2 } className="card-containe achcard">
                                        { this.state.show2 ? <img src={BlackjackFront} className="achimg"  alt="Blackjack Achievement"/> : <img src={Blackjack2} className="achimg"  alt="Blackjack Achievement"/> }
                                    </div>
                                    <div onClick={ this.toggleNFT3 } className="card-containe achcard">
                                        { this.state.show3 ? <img src={BlackjackFront} className="achimg"  alt="Blackjack Achievement"/> : <img src={Blackjack3} className="achimg"  alt="Blackjack Achievement"/> }
                                    </div>
                                    <div onClick={ this.toggleNFT4 } className="card-containe achcard">
                                        { this.state.show4 ? <img src={BlackjackFront} className="achimg"  alt="Blackjack Achievement"/> : <img src={Blackjack4} className="achimg"  alt="Blackjack Achievement"/> }
                                    </div>
                                    <div onClick={ this.toggleNFT5 } className="card-containe achcard">
                                        { this.state.show5 ? <img src={BlackjackFront} className="achimg"  alt="Blackjack Achievement"/> : <img src={Blackjack5} className="achimg"  alt="Blackjack Achievement"/> }
                                    </div>
                                {/* </ReactCardCarousel> */}
                                {/* </Slider> */}
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
