import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';
import { IoMdArrowDropdown } from 'react-icons/io';

import GamesDropdown, {UserDropdown} from '../Dropdown/dropdown';

import { NavDropdown } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from "../../assets/navlogo.svg";


function Navbar() {
    // Social dropdown state hooks code 
    const [show, setShow] = useState(false);
    const showDropdown = (e)=>{
        setShow(!show);
    }
    const hideDropdown = e => {
        setShow(false);
    }

    // Games dropdown state hooks code
    const [click, setClick] = useState(false);
    const [userClick, setUserClick] = useState(false);
    const [socialClick, setSocialClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const userDropdownClick = () => setUserClick(!userClick);
    const socialDropdownClick = () => setSocialClick(!socialClick);
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

    // User dropdown state hooks code 
    const [showUser, setShowUser] = useState(false);
    const showUserDropdown = () => {
        if (window.innerWidth < 960) {
            setShowUser(false);
        } else {
            setShowUser(true);
        }
    };
    const hideUserDropdown = () => {
        if (window.innerWidth < 960) {
            setShowUser(false);
        } else {
            setShowUser(false);
        }
    };

    // Loged in state used to change navbar on user loged in navbar view
    const [logedIn, setLogedIn] = useState(false);
    const showNav = () => {
        setLogedIn(true);
     };

    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <NavLink to='/' exact className="nav-logo" onClick={closeMobileMenu}>
                        <img src={logo} className="logo" alt="N-Life Logo"/>
                    </NavLink>

                    <div className="nav-icon" onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>

                    {logedIn ?
                        <Fragment>
                            <li
                                className="nav-mobuser"
                                onClick={userDropdownClick}
                                onMouseEnter={showUserDropdown} 
                                onMouseLeave={hideUserDropdown}
                            >
                                <NavLink
                                    exact
                                    to="#"
                                    activeClassName="active"
                                    className="nav-links "
                                    onClick={closeMobileMenu}
                                >
                                    <FaUserCircle className="user-icon"/> <IoMdArrowDropdown className="arrow"/>
                                </NavLink>
                                {showUser && <UserDropdown />}
                                {userClick && <UserDropdown />}
                            </li>
                        </Fragment>
                        :
                        null
                    }

                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        {/* <li className="nav-item">
                            <NavLink
                                exact
                                to="/"
                                activeClassName="active"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                Home
                            </NavLink>
                        </li> */}
                        {/* <div className="nav-center"> */}
                            <li className="nav-item">
                                <NavLink
                                    exact
                                    to="/About"
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
                                    to="/Staking"
                                    activeClassName="active"
                                    className="nav-links"
                                    onClick={closeMobileMenu}
                                >
                                    Staking
                                </NavLink>
                            </li>
                            <li 
                                className="nav-item mr-0"
                                onMouseEnter={onMouseEnter}
                                onMouseLeave={onMouseLeave}
                            >
                                <NavLink
                                    exact
                                    to="/Games"
                                    activeClassName="active"
                                    className="nav-links gamelink"
                                    onClick={closeMobileMenu}
                                >
                                Games <IoMdArrowDropdown className="arrow"/>
                                </NavLink>
                                {dropdown && <GamesDropdown />}
                            </li>
                            <li
                                className="nav-item nav-links navdropdown mr-0"
                                onMouseEnter={showDropdown} 
                                onMouseLeave={hideDropdown}
                                onClick={socialDropdownClick}
                            >
                                <NavDropdown
                                    title="Socials"
                                    id="collasible-nav-dropdown" 
                                    show={show}
                                    onMouseEnter={showDropdown} 
                                    onMouseLeave={hideDropdown}
                                    onClick={socialDropdownClick}
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
                        {/* </div> */}

                        {logedIn ?
                        <Fragment>
                            <div className="nav-right">
                                <li className="nav-item nav-rightach">
                                    <NavLink
                                        exact
                                        to="/UserAchievement"
                                        activeClassName="active"
                                        className="nav-links"
                                        onClick={closeMobileMenu}
                                    >
                                        Achievements
                                    </NavLink>
                                </li>
                                <li
                                    className="nav-rightuser mr-0"
                                    onMouseEnter={showUserDropdown} 
                                    onMouseLeave={hideUserDropdown}
                                >
                                    <NavLink
                                        exact
                                        to="#"
                                        activeClassName="active"
                                        className="nav-links "
                                        onClick={closeMobileMenu}
                                    >
                                        <FaUserCircle className="user-icon"/> <IoMdArrowDropdown className="arrow"/>
                                    </NavLink>
                                    {showUser && <UserDropdown />}
                                </li>
                            </div>
                        </Fragment>
                        :
                        <Fragment>
                            <li className="nav-rightbtn">
                                <NavLink
                                    exact
                                    to="/Register"
                                    activeClassName="active"
                                    className="nav-links"
                                    onClick={closeMobileMenu}
                                >
                                    <button onClick={showNav} className="button navbtn text-uppercase">Play Now </button>
                                </NavLink>
                            </li>
                        </Fragment>
                        }
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
