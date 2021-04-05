import React from "react";

// import reactLogo from "./img/react.png";
// import mongoLogo from "./img/mongo.png";
// import jsLogo from "./img/js-logo.png";
// import mySqlLogo from "./img/mysql-logo.png";
// import nodeLogo from "./img/nodejs-logo.png";
// import htmlLogo from "./img/html-logo.png";
// import cssLogo from "./img/css-logo.png";

import snails from "./img/photography/snails.jpg";
import carousel from "./img/photography/carousel.jpg";
import caterpillar from "./img/photography/caterpillar.jpg";
import gator from "./img/photography/gator.jpg";
import girls from "./img/photography/girls.jpg";
import stage from "./img/photography/stage.jpg";
import sunset from "./img/photography/sunset.jpg";

import "./test2.css";

function Hexagons() {
    return (
            
        <div className="grid">
            <ul id="hexGrid">


                {/* Test Photos */}
                <li className="hex">
                    <div className="hexIn">
                        <a id="grayscale" className="hexLink">
                            <div className='img' style={{ backgroundImage: `url(${snails})` }}></div>
                        </a>
                    </div>
                </li>

                {/* <li className="hex">
                    <div className="hexIn">
                    <a className="hexLink">
                        <div className='img' style={{ backgroundImage: `url(${mySqlLogo})` }}></div>
                        <h1 id="demo1">MySql</h1>
                    </a>
                    </div>
                </li>

                <li className="hex">
                    <div className="hexIn">
                    <a className="hexLink">
                        <div className='img' style={{ backgroundImage: `url(${nodeLogo})` }}></div>
                        <h1 id="demo1">Node JS</h1>
                    </a>
                    </div>
                </li> */}

                <li className="hex">
                    <div className="hexIn">
                        <a id="grayscale" className="hexLink">
                            <div className='img' style={{ backgroundImage: `url(${carousel})` }}></div>
                        </a>
                    </div>
                </li>

                {/* <li className="hex">
                    <div className="hexIn">
                    <a className="hexLink" href="#">
                    <div className='img' style={{ backgroundImage: `url(${reactLogo})` }}></div>
                        <h1 id="demo1">React</h1>
                    </a>
                    </div>
                </li>

                <li className="hex">
                    <div className="hexIn">
                    <a className="hexLink" href="#">
                            <div className='img' style={{ backgroundImage: `url(${jsLogo})` }}></div>
                        <h1 id="demo1">Javascript</h1>
                    </a>
                    </div>
                </li> */}

                <li className="hex">
                    <div className="hexIn">
                        <a id="grayscale" className="hexLink">
                            <div className='img' style={{ backgroundImage: `url(${girls})` }}></div>
                        </a>
                    </div>
                </li>

                {/* <li className="hex">
                    <div className="hexIn">
                    <a className="hexLink" href="#">
                        <div className='img' style={{ backgroundImage: `url(${htmlLogo})` }}></div>
                        <h1 id="demo1">HTML</h1>
                    </a>
                    </div>
                </li> */}

                <li className="hex">
                    <div className="hexIn">
                        <a id="grayscale" className="hexLink">
                            <div className='img' style={{ backgroundImage: `url(${stage})` }}></div>
                        </a>
                    </div>
                </li>

                <li className="hex">
                    <div className="hexIn">
                        <a id="grayscale" className="hexLink">
                            <div className='img' style={{ backgroundImage: `url(${sunset})` }}></div>
                        </a>
                    </div>
                </li>

                
                {/* <li className="hex">
                    <div className="hexIn">
                    <a className="hexLink" href="#">
                        <div className='img' style={{ backgroundImage: `url(${cssLogo})` }} ></div>
                        <h1 id="demo1">CSS</h1>
                    </a>
                    </div>
                </li> */}

                <li className="hex">
                    <div className="hexIn">
                        <a id="grayscale" className="hexLink">
                            <div className='img' style={{ backgroundImage: `url(${gator})` }}></div>
                        </a>
                    </div>
                </li>

                <li className="hex">
                    <div className="hexIn">
                        <a id="grayscale" className="hexLink">
                            <div className='img' style={{ backgroundImage: `url(${caterpillar})` }}></div>
                        </a>
                    </div>
                </li>

                {/* <li className="hex">
                    <div className="hexIn">
                    <a className="hexLink" href="#">
                        <div className='img' style={{ backgroundImage: `url(${mongoLogo})` }}></div>
                        <h1 id="demo1">Mongo DB</h1>
                    </a>
                    </div>
                </li> */}

                <li className="hex">
                    <div className="hexIn">
                        <a id="grayscale" className="hexLink">
                            <div className='img' style={{ backgroundImage: `url(${caterpillar})` }}></div>
                        </a>
                    </div>
                </li>

                <li className="hex">
                    <div className="hexIn">
                        <a id="grayscale" className="hexLink">
                            <div className='img' style={{ backgroundImage: `url(${caterpillar})` }}></div>
                        </a>
                    </div>
                </li>
                

            </ul>
            
        </div>
    )
}

export default Hexagons;