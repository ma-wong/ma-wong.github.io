import React from "react";
import "./style.css";
import profileImg from "./img/profile.jpg";
import { Link } from "react-router-dom";

function Biography() {

    return(
        <div>
            <div className="row">
                <div className="col-md-5 bio-photo-div">
                    <div className='bio-photo' style={{backgroundImage: `url(${profileImg})`}}>
                        <div className='text'>Hello!</div>
                    </div>
                </div>

                {/* <div className="col-md-1"></div> */}

                <div className="col-md-7">
                    <p id="bio-text">
                        <span className="tab"></span> My name is Morgan. I am a full-stack web developer currently living in Los Angeles, CA.
                        I am currently acting as a freelancer for independent clients and small businesses while also completing my major in Biopsychology.
                        I develop and design functional, aesthetic, and user-oriented websites as well as web applications by combining my artistic background with conventional web practices.
                        Formerly a professional photographer, I continue to express my creativity through my websites, traditional canvas art, and graphic design.
                        Check out some of my photography <Link to={"/photography"}><span id="photo-link">HERE!</span></Link>
                    </p>
                </div>

            </div>

        </div>
    )
}

export default Biography;

