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
                    {/* <p>Hello, my name is Morgan Wong. I am a full-stack web developed living in Los Angeles, CA.</p> */}
                    <p id="bio-text">Hello my name is hammy and i am very stinky</p>

                </div>

            </div>

        </div>
    )
}

export default Biography;

