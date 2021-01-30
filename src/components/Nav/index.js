import React from "react";
import { Link } from "react-router-dom";
import placeholder from "./img/placeholder.png";
import "./style.css"

function Nav() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={placeholder} alt="" width="30" height="24" />
                    </a>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="#">HOME</a>
                            <a className="nav-link" href="#">ABOUT</a>
                            <a className="nav-link" href="#">PORTFOLIO</a>
                            <a className="nav-link" href="#">CONTACT</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav;