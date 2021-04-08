import React from "react";
import { Link } from "react-router-dom";
import logo from "./img/logo.png";
import "./style.css"

function Nav() {
    return (

        // ------- OLD CENTERED NAV -----
        // <div id="nav-container">
        //     <nav className="navbar navbar-expand-lg navbar-dark">
        //         <div className="container-fluid">
        //             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        //                 <span className="navbar-toggler-icon"></span>
        //             </button>
        //             <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

        //                 <div className="navbar-nav">
        //                     <ul>
        //                         <Link to= {"/"}>
        //                             <li className="nav-link" aria-current="page">HOME</li>
        //                         </Link>

        //                         <Link to={"/about"}>
        //                             <li className="nav-link">ABOUT</li>
        //                         </Link>

        //                         <Link to={"/"} >
        //                             <li>
        //                                 <img id="nav-logo" src={logo} alt="" width="120" height="120"/>
        //                             </li>
        //                         </Link>

        //                         <Link to={"/portfolio"}>
        //                             <li className="nav-link">PORTFOLIO</li>
        //                         </Link>

        //                         <Link to={"/contact"}>
        //                             <li className="nav-link">CONTACT</li>
        //                         </Link>

        //                     </ul>
                            
        //                 </div>



        //             </div>
        //         </div>
        //     </nav>
        // </div>

        // ---- LEFT ALIGNED NAV ------
        // <div id="nav-container" className="container">
        //     <nav className="navbar navbar-expand-lg navbar-dark">
        //         <div className="container-fluid">
        //             <Link to= {"/"}>
        //                 <a className="navbar-brand" href="#">
        //                     <img id="nav-logo" src={logo} alt="" width="30" height="24"/>
        //                 </a>
        //             </Link>

        //             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        //                 <span className="navbar-toggler-icon"></span>
        //             </button>

        //             <div className="collapse navbar-collapse" id="navbarNav">
        //                 <ul className="navbar-nav d-flex justify-content-end">
        //                     <Link to={"/about"}>
        //                         <li className="nav-link">ABOUT</li>
        //                     </Link>
        //                     <Link to={"/portfolio"}>
        //                         <li className="nav-link">PORTFOLIO</li>
        //                     </Link>
        //                     <Link to={"/contact"}>
        //                         <li className="nav-link">CONTACT</li>
        //                     </Link>
        //                 </ul>
        //             </div>
        //         </div>
        //     </nav>
        // </div>
        
        // ---- TESTING------
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