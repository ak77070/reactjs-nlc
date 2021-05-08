import React from 'react'
import './style.css';  // Stylesheet for the cards components

import Animation from '../Utils/JsonAnimation';  

// JSON files used
import Platfimg1 from '../../JsonFiles/Platfimg1.json';
import Platfimg2 from '../../JsonFiles/Platfimg2.json';
import Platfimg3 from '../../JsonFiles/Platfimg3.json';
import Platfimg4 from '../../JsonFiles/Platfimg4.json';
import Platfimg5 from '../../JsonFiles/Platfimg5.json';
import Platfimg6 from '../../JsonFiles/Platfimg6.json';

function Card({title, imageUrl}) {
    return (
        <>
            <div className="card-container platfromcard">
                <div className="image-container">
                    <Animation animation={Platfimg1} />
                    {/* <img src={platfimg1} width="100px" height="100px" alt=''/> */}
                </div>
                <div className="card-title">
                    <h5>Zero Transaction Fees For Games</h5>
                </div>
            </div>
            <div className="card-container platfromcard">
                <div className="image-container">
                    <Animation animation={Platfimg2} />
                    {/* <img src={platfimg2} width="100px" height="100px" alt=''/> */}
                </div>
                <div className="card-title">
                    <h5>Soundtracks Made by Professional Musicians</h5>
                </div>
            </div>
            <div className="card-container platfromcard">
                <div className="image-container">
                    <Animation animation={Platfimg3} />
                    {/* <img src={platfimg3} width="100px" height="100px" alt=''/> */}
                </div>
                <div className="card-title">
                    <h5>Achievements and Bonus for Leaderboard Ranking</h5>
                </div>
            </div>
        </>
    )
}

function Card1({title, imageUrl}) {
    return (
        <>
            <div className="card-container platfromcard">
                <div className="image-container">
                    <Animation animation={Platfimg4} />
                    {/* <img src={platfimg4} width="100px" height="100px" alt=''/> */}
                </div>
                <div className="card-title">
                    <h5>2 Layer Solution: Binance Smart Chain & Turtle Network</h5>
                </div>
            </div>
            <div className="card-container platfromcard">
                <div className="image-container">
                    <Animation animation={Platfimg5} />
                    {/* <img src={platfimg5} width="100px" height="100px" alt=''/> */}
                </div>
                <div className="card-title">
                    <h5>User Controlled Wallets and Optional 2FA</h5>
                </div>
            </div>
            <div className="card-container platfromcard">
                <div className="image-container">
                    <Animation animation={Platfimg6} />
                    {/* <img src={platfimg6} width="100px" height="100px" alt=''/> */}
                </div>
                <div className="card-title">
                    <h5>Tokenomics Allow for Natural Price Increases Over Time</h5>
                </div>
            </div>
        </>
    )
}


export {Card1}
export default Card
