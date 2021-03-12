import React from "react";
import "./style.css";

function Header() {
    
    return(
        <header className="home-header">
            <p id="home-title">Hello, my name is</p>
            <p id="home-name">Morgan Wong</p>
            <p id="home-description">
                Full-stack web developer / Designer
            </p>
        </header>
    )
}

export default Header;