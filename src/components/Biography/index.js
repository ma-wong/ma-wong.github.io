import { render } from "@testing-library/react";
import React from "react";
import "./style.css";
import profileImg from "./img/profile.jpg";

function Biography() {

    return(
        <div>
            <div className="row">
                <div className="col-md-5 about-img-container">
                    {/* <img id="about-img" src={profileImg} class="img-thumbnail" alt="..."/> */}
                    <div style={{backgroundImage: `url(${profileImg})`}} class='badge'>
                        <div class='text'>Hello!</div>
                    </div>

                </div>

                <div className="col-md-7">
                    <p id="bio-text">
                        <span className="tab"></span> My name is Morgan. I am a full-stack web developer currently living in Los Angeles, CA.
                        I am currently acting as a freelancer for independent clients and small businesses while also completing my major in Biopsychology.
                        I develop and design functional, aesthetic, and user-oriented websites as well as web applications by combining my artistic background with conventional web practices.
                        Formerly a professional photographer, I continue to express my creativity through my websites, traditional canvas art, and graphic design.
                    </p>

                </div>

            </div>


            <div className="row">
                <div className="col-md-5"></div>

                <div className="col-md-7 skills-div">
                    <div className="row">
                        <h6 id="skills-header" className="col-md-2">SKILLS:</h6>
                        <div className="col-md-10">
                            <div className="row">
                                <ul className="col-md-3 skills-list">
                                    <li>Javascript</li>
                                    <li>React.js</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                </ul>
                                <ul className="col-md-3 skills-list">
                                    <li>jQuery</li>
                                    <li>Bootstrap</li>
                                    <li>Node.js</li>
                                    <li>MySQL</li>
                                </ul>
                                <ul className="col-md-3 skills-list">
                                    <li>MongoDB</li>
                                    <li>Express.js</li>
                                    <li>Photoshop</li>
                                    <li>Procreate</li>
                    
                                </ul>
                            </div>
                        </div>

                    </div>
                    

                </div>
                

            </div>

        </div>
    )
}

export default Biography;

