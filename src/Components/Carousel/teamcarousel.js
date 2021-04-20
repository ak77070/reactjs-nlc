import React from 'react'
import './style.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import teamimg1 from "../../assets/Home/TeamMembers/teamimg1.svg";
import teamimg2 from "../../assets/Home/TeamMembers/teamimg2.svg";
import teamimg3 from "../../assets/Home/TeamMembers/teamimg3.svg";
import teamimg4 from "../../assets/Home/TeamMembers/teamimg4.svg";
import teamimg5 from "../../assets/Home/TeamMembers/teamimg5.svg";
import teamimg6 from "../../assets/Home/TeamMembers/teamimg6.svg";
import teamimg7 from "../../assets/Home/TeamMembers/teamimg7.svg";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, fontSize:"30px" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", fontSize: "30px" }}
        onClick={onClick}
      />
    );
  }

function TeamCarousel({heading, title, body}) {
    let settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear",
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    }
    return (
        <Slider {...settings}>
        <div className="p-2">
            <div className="team-card-container">
                <div className="image-container">
                    <img src={teamimg1} className="teamimg" width="100%" height="auto" alt="Lead Developer"/>
                </div>
                <div className="card-content">
                    <div className="card-title">
                        <h4 className="teamname">Etienne</h4>
                        <h5 className="teamrole">Lead Developer</h5>
                    </div>
                    <div className="card-body pb-0">
                        <p>Etienne is a seasoned Solidity developer, creating smart-contracts and various dApps in Ethereum. He then jumped into learning the RIDE smart-contract language and began developing contracts for Turtle Network.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="p-2">
            <div className="team-card-container">
                <div className="image-container">
                    <img src={teamimg2} className="teamimg" width="100%" height="auto" alt="Lead Developer"/>
                </div>
                <div className="card-content">
                    <div className="card-title">
                        <h4 className="teamname">Draeth</h4>
                        <h5 className="teamrole">Advisor</h5>
                    </div>
                    <div className="card-body pb-0">
                        <p>Draeth is a Captain over at the privacy project Prirate Chain, as well as the Founder of the Blockchain Privacy, Security & Adoption Alliance(BPSAA). He brings a wealth of knowledge in terms of project management, development and provides an invaluable amount of connections. </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="p-2">
            <div className="team-card-container">
                <div className="image-container">
                    <img src={teamimg3} className="teamimg" width="100%" height="auto" alt="Lead Developer"/>
                </div>
                <div className="card-content">
                    <div className="card-title">
                        <h4 className="teamname">Wolf</h4>
                        <h5 className="teamrole">Advisor</h5>
                    </div>
                    <div className="card-body pb-0">
                        <p>Wolf began as a community member of Waves Platform, then moved over to an advisor role at Turtle Network. He then co-formed Polarity Enchange, which is currently a rising decentralized exchange that has built groundbreaking security tech for the exchange and it's users.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="p-2">
            <div className="team-card-container">
                <div className="image-container">
                    <img src={teamimg4} className="teamimg" width="100%" height="auto" alt="Lead Developer"/>
                </div>
                <div className="card-content">
                    <div className="card-title">
                        <h4 className="teamname">Dreamtim</h4>
                        <h5 className="teamrole">Advisor</h5>
                    </div>
                    <div className="card-body">
                        <p>BPSAA VP of Marketing. Pirate Chain Head of Marketing</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="p-2">
            <div className="team-card-container">
                <div className="image-container">
                    <img src={teamimg5} className="teamimg" width="100%" height="auto" alt="Lead Developer"/>
                </div>
                <div className="card-content">
                    <div className="card-title">
                        <h4 className="teamname">Aureus</h4>
                        <h5 className="teamrole">Partner</h5>
                    </div>
                    <div className="card-body">
                        <p>Gateway Development. External Services</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="p-2">
            <div className="team-card-container">
                <div className="image-container">
                    <img src={teamimg6} className="teamimg" width="100%" height="auto" alt="Lead Developer"/>
                </div>
                <div className="card-content">
                    <div className="card-title">
                        <h4 className="teamname">KGB Concepts</h4>
                        <h5 className="teamrole">Partner</h5>
                    </div>
                    <div className="card-body">
                        <p>Cyber Security. Server Development</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="p-2">
            <div className="team-card-container">
                <div className="image-container">
                    <img src={teamimg7} className="teamimg" width="100%" height="auto" alt="Lead Developer"/>
                </div>
                <div className="card-content">
                    <div className="card-title">
                        <h4 className="teamname">Multi Tech Solutions</h4>
                        <h5 className="teamrole">Game Developer</h5>
                    </div>
                    <div className="card-body">
                        <p>Arcade Game Development. Platform Advisor</p>
                    </div>
                </div>
            </div>
        </div>
        </Slider>
    )
}

export default TeamCarousel