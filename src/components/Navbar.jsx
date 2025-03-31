import React from "react";
import "../style.css";
import logo from "../assets/logo.svg";
import leftBg from "../assets/leftNavbar.svg";
import rightBg from "../assets/rightNavbar.svg";

const Navbar = () => {
    return (
        <div className="navbar-container">
            <img src={leftBg} alt="left" className="navbar-left-bg" />
            <img src={rightBg} alt="right" className="navbar-right-bg" />

            <nav className="navbar">
                <div className="navbar-logo">
                    <img src={logo} alt="logo" />
                    <span>Military nets</span>
                </div>
                <ul className="navbar-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Other</a></li>
                    <li><a href="#">Name</a></li>
                </ul>
                <div className="navbar-button" />
            </nav>
        </div>
    );
};

export default Navbar;
