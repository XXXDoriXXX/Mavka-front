import React from "react";
import logo from "../assets/logo.svg";
import polygon2 from "../assets/rightNavbar.svg";
import rectangle28 from "../assets/leftNavbar.svg";
import "../style.css";

export const Navbar = () => {
    return (
        <div className="box">
            <div className="group">
                <div className="overlap-group">
                    <div className="rectangle" />

                    <img className="polygon" alt="Polygon" src={polygon2} />

                    <img className="img" alt="Rectangle" src={rectangle28} />

                    <div className="text-wrapper">Military nets</div>

                    <img className="component" alt="logo" src={logo}/>
                    <div className="div">Home</div>

                    <div className="text-wrapper-2">Other</div>

                    <div className="text-wrapper-3">Name</div>

                    <div className="rectangle-2" />
                </div>
            </div>
        </div>
    );
};