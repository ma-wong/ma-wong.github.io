import React from "react";
import { Link } from "react-router-dom";
import "./style.css"
import logo from "./img/logo.png";

function Nav() {
    return (

        <div id="nav-div" className="container">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <Link to= {"/"}>
                        <img id="nav-logo" src={logo} alt="" width="30" height="24"/>
                    </Link>

                    {/* Nav Buttonn */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                        <span className="navbar-toggler-icon" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"></span>
                    </button>

                    {/* Off Canvas nav content */}
                    <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                        <div className="offcanvas-header">
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <div className="row">
                                <Link to={"/about"}>
                                    <p className="offcanvas-nav-link">ABOUT</p>
                                </Link>
                            </div>
                            <div className="row">
                                <Link to={"/portfolio"}>
                                    <p className="offcanvas-nav-link">PORTFOLIO</p>
                                </Link>
                            <div className="row">
                            </div>
                                <Link to={"/contact"}>
                                    <p className="offcanvas-nav-link">CONTACT</p>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Normal left aligned Nav */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav d-flex justify-content-end">
                            <Link to={"/about"}>
                                <li className="nav-link">ABOUT</li>
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
            </nav>
        </div>

        
    )
}

export default Nav;