import React from 'react'
import Slider from 'react-slick'
import './style.css';

function HeroCarousel({heading, title, body}) {
    let settings = {
        // dots: true,
        infinite: 1,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: "linear",
        autoplay: true,
        autoplaySpeed: 6000,
        arrows: false,
    }
        return(
            <Slider {...settings}>
                <div className="herovid">
                    <video src={process.env.PUBLIC_URL + '/Videos/introvid.mp4'} width="100%" height="100%" autoPlay muted/>
                </div>
                <div className="heroimg">
                    <img src={process.env.PUBLIC_URL + '/Images/nlc-logo.svg'} />
                </div>
            </Slider>
        )
    }

export default HeroCarousel
