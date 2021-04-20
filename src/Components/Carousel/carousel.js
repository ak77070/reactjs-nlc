import React from 'react'
import './style.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import roadmap1 from "../../assets/About/roadmap1.svg"
import roadmap2 from "../../assets/About/roadmap2.svg"
import roadmap3 from "../../assets/About/roadmap3.svg"
import roadmap4 from "../../assets/About/roadmap4.svg"
import roadmap5 from "../../assets/About/roadmap5.svg"

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block"}}
        onClick={onClick}
      />
    );
  }
  
  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block"}}
        onClick={onClick}
      />
    );
  }

function Carousel({heading, title, body}) {
    let settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear",
        // autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
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
          <div className="">
            <div className="card-container roadmapcard">
                {/* <div className="card-content">
                    <div className="card-title">
                        <h5>Q1 2021</h5>
                        <h6>Development & Release</h6>
                    </div>
                    <div className="card-body">
                        
                          <ul>
                            <li>Platform Ideation</li>
                            <li>Pre-Sale</li>
                            <li>Onboarding Devs, Partners, Advisors</li>
                            <li>Games & Contracts Creation</li>
                            <li>Apply for IFO on Pancakeswap</li>
                          </ul>
                    </div> 
                </div> */}
                <img src={roadmap1} className="roadmapimg" alt="sec1img"/>
            </div>
          </div>
          <div className="">
            <div className="card-container roadmapcard">
                {/* <div className="card-content">
                    <div className="card-title">
                        <h5>Q2 2021</h5>
                        <h6>Additional Features & Games</h6>
                    </div>
                    <div className="card-body">
                          <ul>
                            <li>IFO Listing on Pancakeswap</li>
                            <li>Contract and Game Auditing</li>
                            <li>Platform Launch</li>
                            <li>Arcade Game Demo Release</li>
                            <li>Additional Game Dev & Release</li>
                            <li>NFT & Marketplace Release</li>
                          </ul>
                    </div>
                </div> */}
                <img src={roadmap2} className="roadmapimg" alt="sec1img"/>
            </div>
          </div>
          <div className="">
            <div className="card-container roadmapcard">
                {/* <div className="card-content">
                    <div className="card-title">
                        <h5>Q3 2021</h5>
                        <h6>Additional Services</h6>
                    </div>
                    <div className="card-body">
                          <ul>
                            <li>Mobile App Release</li>
                            <li>Trading Card Game Testing</li>
                            <li>Fiat Onramp Release</li>
                            <li>Tournament Hosting</li>
                            <li>Additional Game Dev & Release</li>
                            <li>Multiplayer Development</li>
                          </ul>
                    </div>
                </div> */}
                <img src={roadmap3} className="roadmapimg" alt="sec1img"/>
            </div>
          </div>
          <div className="">
            <div className="card-container roadmapcard">
                {/* <div className="card-content">
                    <div className="card-title">
                        <h5>Q4 2021</h5>
                        <h6>Additional Games</h6>
                    </div>
                    <div className="card-body">
                          <ul>
                            <li>Additional Game Dev & Releases</li>
                            <li>Trading Card Game Release</li>
                            <li>Multiplayer Game</li>
                            <li>Desktop App Release</li>
                            <li>Additional Tournaments</li>
                            <li>Community Holiday Surprise(edited)</li>
                          </ul>
                    </div>
                </div> */}
                <img src={roadmap4} className="roadmapimg" alt="sec1img"/>
            </div>
          </div>
          <div className="">
            <div className="card-container roadmapcard">
                {/* <div className="card-content">
                    <div className="card-title">
                        <h5>Q4 2020</h5>
                        <h6>Partnership</h6>
                    </div>
                    <div className="card-body">
                          <ul>
                            <li>Platform Ideation</li>
                            <li>Pre-Sale</li>
                            <li>Onboarding Devs, Partners, Advisors</li>
                            <li>Games & Contracts Creation</li>
                            <li>Apply for IFO on Pancakeswap</li>
                          </ul>
                    </div>
                </div> */}
                <img src={roadmap5} className="roadmapimg" alt="sec1img"/>
            </div>
          </div>
        </Slider>
    )
}

export default Carousel
