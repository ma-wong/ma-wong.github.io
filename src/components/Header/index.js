import React from "react";
import "./style.css";

function Header() {
    
    return(
        <header className="home-header col-md-8">
            <h1 id="home-title">Hello, I'm <span id="home-name">Morgan Wong.</span></h1>
            <p id="home-description">
                I'm a full-stack web developer and designer.
            </p>
        </header>
    )
}

export default Header;