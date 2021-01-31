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
                            <Link to= {"/"}>
                                <a className="nav-link active" aria-current="page" href="#">HOME</a>
                            </Link>

                            <Link to={"/about"}>
                                <a className="nav-link" href="#">ABOUT</a>
                            </Link>

                            <Link to={"/portfolio"}>
                                <a className="nav-link" href="#">PORTFOLIO</a>
                            </Link>

                            <Link to={"/contact"}>
                                <a className="nav-link" href="#">CONTACT</a>
                            </Link>
                            
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav;