import React from "react";
import "../style.css";
import { useState } from 'react';
import logo from "../assets/logo.svg";
import leftBg from "../assets/leftNavbar.svg";
import rightBg from "../assets/rightNavbar.svg";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prevState => {
            return !prevState;
        });
    };

    return (
        <div className="navbar">
            <div className="navbar-left-block">
                <img src={leftBg} alt="left" className="navbar-bg" />
                <img src={logo} alt="logo" className="navbar-logo-img" />
                <span className="navbar-title">Military nets</span>
            </div>

            <div className="navbar-right-block">
                <img src={rightBg} alt="right" className="navbar-right-bg"/>
                <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
                    <li><a className="a-left" href="#">Home</a></li>
                    <div className="underLine"></div>
                    <li><a className="a-left" href="#">Other</a></li>
                    <div className="underLine"></div>
                    <li><a className="a-right" href="#">Profile</a></li>
                </ul>

                <div className="burger" onClick={toggleMenu}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
