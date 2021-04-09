import React from "react";
import "./style.css";

function Header() {
    
    return(
        <div className="container">
            <header className="home-header">
                <p id="home-title"><span id="splash-hello">Hello, m</span>y name is</p>
                <p id="home-name">MORGAN WONG</p>
                <p id="home-description">
                    Full-stack web developer / Designer
                </p>
            </header>
        </div>
        
    )
}

export default Header;