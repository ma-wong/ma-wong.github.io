import React from "react";
import { Link } from "react-router-dom";
import logo from "./img/logo.png";
import "./style.css"

function Nav() {
    return (
        <div id="nav-container">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    {/* <a className="navbar-brand" href="#">
                        <img src={placeholder} alt="" width="30" height="24" />
                    </a> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        {/* <div className="navbar-nav">
                            <Link to= {"/"}>
                                <a className="nav-link" aria-current="page">HOME</a>
                            </Link>

                            <Link to={"/about"}>
                                <a className="nav-link">ABOUT</a>
                            </Link>

                            <Link to={"/"} >
                                <img id="nav-logo" src={logo} alt="" width="120" height="120"/>
                            </Link>

                            <Link to={"/portfolio"}>
                                <a className="nav-link">PORTFOLIO</a>
                            </Link>

                            <Link to={"/contact"}>
                                <a className="nav-link">CONTACT</a>
                            </Link>
                            
                        </div> */}

                        <div className="navbar-nav">
                            <ul>
                                <Link to= {"/"}>
                                    <li className="nav-link" aria-current="page">HOME</li>
                                </Link>

                                <Link to={"/about"}>
                                    <li className="nav-link">ABOUT</li>
                                </Link>

                                <Link to={"/"} >
                                    <li>
                                        <img id="nav-logo" src={logo} alt="" width="120" height="120"/>
                                    </li>
                                </Link>

                                <Link to={"/portfolio"}>
                                    <li className="nav-link">PORTFOLIO</li>
                                </Link>

                                <Link to={"/contact"}>
                                    <li className="nav-link">CONTACT</li>
                                </Link>

                            </ul>
                            
                        </div>



                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav;