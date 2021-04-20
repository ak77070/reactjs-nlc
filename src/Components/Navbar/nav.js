import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import { FaBars, FaTimes } from 'react-icons/fa';
import { IoMdArrowDropdown } from 'react-icons/io';

import GamesDropdown from '../Dropdown/dropdown';

import { NavDropdown } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from "../../assets/navlogo.svg";


function Navbar() {

    const [show, setShow] = useState(false);
    const showDropdown = (e)=>{
        setShow(!show);
    }
    const hideDropdown = e => {
        setShow(false);
    }

    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
        setDropdown(false);
        } else {
        setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
        setDropdown(false);
        } else {
        setDropdown(false);
        }
    };
    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <NavLink to='/nlc' className="nav-logo" onClick={closeMobileMenu}>
                        <img src={logo} className="logo" alt="N-Life Logo"/>
                    </NavLink>

                    <div className="nav-icon" onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>

                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        {/* <li className="nav-item">
                            <NavLink
                                exact
                                to="/nlc"
                                activeClassName="active"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                Home
                            </NavLink>
                        </li> */}
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/nlc/About"
                                activeClassName="active"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/nlc/Staking"
                                activeClassName="active"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                Staking
                            </NavLink>
                        </li>
                        <li 
                            className="nav-item gameitem mr-0"
                            onMouseEnter={onMouseEnter}
                            onMouseLeave={onMouseLeave}
                        >
                            <NavLink
                                exact
                                to="/nlc/Games"
                                activeClassName="active"
                                className="nav-links gamelink"
                                onClick={closeMobileMenu}
                            >
                                Games<IoMdArrowDropdown className="gamearrow"/>
                            </NavLink>
                            {dropdown && <GamesDropdown />}
                        </li>
                        <li
                            className="nav-item nav-links navdropdown mr-0"
                            // onMouseEnter={onMouseEnter}
                            // onMouseLeave={onMouseLeave}
                            onMouseEnter={showDropdown} 
                            onMouseLeave={hideDropdown}
                        >
                            {/* <NavLink
                                exact
                                to="/nlc/Socials"
                                activeClassName="active"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            > */}
                                {/* Socials */}
                            {/* </NavLink> */}
                            {/* {dropdown && <SocialsDropdown />} */}

                            <NavDropdown 
                                title="Socials" 
                                id="collasible-nav-dropdown" 
                                show={show}
                                onMouseEnter={showDropdown} 
                                onMouseLeave={hideDropdown}
                                className="dropdownsocial mr-0"
                            >
                                <NavDropdown.Item className="dropdownlist" href="https://discord.com/invite/9xFMsfupMY" target="_blank">Discord</NavDropdown.Item>
                                <NavDropdown.Item className="dropdownlist" href="https://www.instagram.com/nightlifecrypto/" target="_blank">Instagram</NavDropdown.Item>
                                <NavDropdown.Item className="dropdownlist" href="https://twitter.com/nightlifecrypto" target="_blank">Twitter</NavDropdown.Item>
                                <NavDropdown.Item className="dropdownlist" href="https://bittube.tv/profile/NightLifeCrypto" target="_blank">Bittube</NavDropdown.Item>
                                <NavDropdown.Item className="dropdownlist" href="https://nightlifecrypto.medium.com" target="_blank">Medium</NavDropdown.Item>
                                <NavDropdown.Item className="dropdownlist" href="https://t.me/nightlifecrypto" target="_blank">Telegram</NavDropdown.Item>
                                <NavDropdown.Item className="dropdownlist" href="https://flote.app/user/nightlifecrypto" target="_blank">Flote</NavDropdown.Item>
                            </NavDropdown>

                        </li>
                        
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/nlc/UserAccount"
                                activeClassName="active"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                Account
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/nlc/UserAchievement"
                                activeClassName="active"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                Achievements
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                exact
                                to="/nlc/Register"
                                activeClassName="active"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                <button className="button navbtn text-uppercase">Play Now </button>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
