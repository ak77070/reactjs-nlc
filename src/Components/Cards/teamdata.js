import React from 'react'
import './style.css';

import teamsq1 from "../../assets/About/TeamMembers/teamsq1.svg";
import teamsq2 from "../../assets/About/TeamMembers/teamsq2.svg";
import teamsq3 from "../../assets/About/TeamMembers/teamsq3.svg";
import teamsq4 from "../../assets/About/TeamMembers/teamsq4.svg";
import teamsq5 from "../../assets/About/TeamMembers/teamsq5.svg";
import teamsq6 from "../../assets/About/TeamMembers/teamsq6.svg";

function teamdata() {
    return (
        <>
            <div className="card-columns cardcol">
                <div className="teamcard">
                    <div className="cardimgsec">
                        <img src={teamsq1} className="cardimg" width="100%" height="auto" alt="Blockchain assets"/>
                    </div>
                    <div className="card-content">
                        <h4 className="teamname mb-2">Draeth</h4>
                        <p>Project Advisor</p>
                        <p>Captain of Pirate Chain</p>
                        <p>Founder of the BPSAA</p>
                    </div>
                </div>
                <div className="teamcard">
                    <div className="cardimgsec">
                        <img src={teamsq2} className="cardimg" width="100%" height="auto" alt="Blockchain assets"/>
                    </div>
                    <div className="card-content">
                        <h4 className="teamname mb-2">Dreamtim</h4>
                        <p>Marketing Advisor</p>
                        <p>BPSAA VP of Marketing</p>
                        <p>Pirate Chain Head of Marketing</p>
                    </div>
                </div>
                <div className="teamcard">
                    <div className="cardimgsec">
                        <img src={teamsq3} className="cardimg" width="100%" height="auto" alt="Blockchain assets"/>
                    </div>
                    <div className="card-content">
                        <h4 className="teamname mb-2">Wolf</h4>
                        <p>Technology Advisor</p>
                        <p>Chief Business Officer for Aureus</p>
                        <p>Advisor at Turtle Network</p>
                    </div>
                </div>
            </div>
            <div className="card-columns cardcol">
                <div className="teamcard">
                    <div className="cardimgsec">
                        <img src={teamsq4} className="cardimg" width="100%" height="auto" alt="Blockchain assets"/>
                    </div>
                    <div className="card-content">
                        <h4 className="teamname mb-2">Aureus</h4>
                        <p>Partner</p>
                        <p>Gateway Development</p>
                        <p>External Services</p>
                    </div>
                </div>
                <div className="teamcard">
                    <div className="cardimgsec">
                        <img src={teamsq5} className="cardimg" width="100%" height="auto" alt="Blockchain assets"/>
                    </div>
                    <div className="card-content">
                        <h4 className="teamname mb-2">Multi Tech Solutions</h4>
                        <p>Game Developer</p>
                        <p>Arcade Game Development</p>
                        <p>Platform Advisor</p>
                    </div>
                </div>
                <div className="teamcard">
                    <div className="cardimgsec">
                        <img src={teamsq6} className="cardimg" width="100%" height="auto" alt="Blockchain assets"/>
                    </div>
                    <div className="card-content">
                        <h4 className="teamname mb-2">KGB Concepts</h4>
                        <p>Partner</p>
                        <p>Cyber Security</p>
                        <p>Server Development</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default teamdata
