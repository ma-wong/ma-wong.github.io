import { render } from "@testing-library/react";
import React from "react";
import "./style.css";
import testImg from "./img/test.png";

function Biography() {

    return(
        <div>
            <div className="row">
                <div className="col-md-5 about-img-container">
                    <img id="about-img" src={testImg} class="img-thumbnail" alt="..."/>

                </div>

                <div className="col-md-7">
                    <p>
                        Hello, my name is Morgan. I am a full-stack web developer currently living in Los Angeles, CA.
                        I am currently acting as a freelancer for independent clients and small businesses while also completing my major in Biopsychology.
                        I develop and design functional, aesthetic, and user-oriented websites as well as web applications by combining my artistic background with conventional web practices.
                        Formerly a professional photographer, I continue to express my creativity through my websites, traditional canvas art, and graphic design.
                    </p>

                </div>

                <div className="row">
                    <h6>Skills:</h6>
                    <ul>
                        <li>Javascript</li>
                        <li>React.js</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>jQuery</li>
                        <li>Bootstrap</li>
                        <li>Node.js</li>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                        <li>Express.js</li>
                    </ul>

                </div>

            </div>

        </div>
    )
}

export default Biography;

