import React from "react";
import logo from "../assets/logo.svg"; // Replace with your logo path
import "../style.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left-block">
                <img src={logo} alt="Logo" className="navbar-logo-img" />
                <div className="navbar-title">MAVKA</div>
            </div>
            <div className="navbar-right-block">
                <ul className="navbar-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/report">Report</a></li>
                    <li><a href="/createnet">Net</a></li>
                    <li><a href="/profile">Profile</a></li>
                </ul>
                <button className="navbar-button">Login</button>
            </div>
        </nav>
    );
};

export default Navbar;
