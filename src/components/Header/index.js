import React from "react";
import "./style.css";

function Header() {
    
    return(
        <header className="home-header col-md-8">
            <p id="home-title">Hi, my name is </p>
            <p id="home-name">Morgan Wong.</p>
            <p id="home-description">
                I'm a full-stack web developer and designer.
            </p>
        </header>
    )
}

export default Header;