import React from "react";
import "../style.css";
import logo from "../assets/logo.svg";
import leftBg from "../assets/leftNavbar.svg";
import rightBg from "../assets/rightNavbar.svg";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-left-block">
                <img src={leftBg} alt="left" className="navbar-bg" />
                <img src={logo} alt="logo" className="navbar-logo-img" />
                <span className="navbar-title">Military nets</span>
            </div>

            <div className="navbar-right-block">
                <img src={rightBg} alt="right" className="navbar-bg" />
                <ul className="navbar-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Other</a></li>
                    <li><a href="#">Name</a></li>
                </ul>
                <div className="navbar-button"></div>
            </div>
        </div>
    );
};

export default Navbar;
