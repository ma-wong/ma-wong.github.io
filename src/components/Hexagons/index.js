import React from "react";
import reactLogo from "./img/react.png";
import mongoLogo from "./img/mongo.png";
import jsLogo from "./img/js-logo.png";
import mySqlLogo from "./img/mysql-logo.png";
import nodeLogo from "./img/nodejs-logo.png";
import htmlLogo from "./img/html-logo.png";
import cssLogo from "./img/css-logo.png";

import "./style.css";

function Hexagons() {
    return (
        <div>
            <div className="grid">
                <ul id="hexGrid">
                    <li className="hex">
                        <div className="hexIn">
                        <a className="hexLink" href="#">
                            <div className='img' style={{ backgroundImage: `url(${mySqlLogo})` }}></div>
                            <h1 id="demo1">MySql</h1>
                            <p id="demo2">Open-source relational database management system.</p>
                        </a>
                        </div>
                    </li>
                        
                    <li className="hex">
                        <div className="hexIn">
                        <a className="hexLink" href="#">
                                <div className='img' style={{ backgroundImage: `url(${jsLogo})` }}></div>
                            <h1 id="demo1">Javascript</h1>
                            <p id="demo2">High-level programming language that conforms to the ECMAScript specification.</p>
                        </a>
                        </div>
                    </li>
                    <li className="hex">
                        <div className="hexIn">
                        <a className="hexLink" href="#">
                            <div className='img' style={{ backgroundImage: `url(${nodeLogo})` }}></div>
                            <h1 id="demo1">Node JS</h1>
                            <p id="demo2">Back-end runtime environment that executes JavaScript code outside a web browser.</p>
                        </a>
                        </div>
                    </li>
                    <li className="hex">
                        <div className="hexIn">
                        <a className="hexLink" href="#">
                            <div className='img' style={{ backgroundImage: `url(${cssLogo})` }} ></div>
                            <h1 id="demo1">CSS</h1>
                            <p id="demo2">Style sheet language used for describing the presentation of a document</p>
                        </a>
                        </div>
                    </li>
                    <li className="hex">
                        <div className="hexIn">
                        <a className="hexLink" href="#">
                            <div className='img' style={{ backgroundImage: `url(${mongoLogo})` }}></div>
                            <h1 id="demo1">Mongo DB</h1>
                            <p id="demo2">A cross-platform document-oriented database program</p>
                        </a>
                        </div>
                    </li>
                    <li className="hex">
                        <div className="hexIn">
                        <a className="hexLink" href="#">
                        <div className='img' style={{ backgroundImage: `url(${reactLogo})` }}></div>
                            <h1 id="demo1">React</h1>
                            <p id="demo2">Front end, JavaScript library for building user interfaces or UI components.</p>
                        </a>
                        </div>
                    </li>
                    <li className="hex">
                        <div className="hexIn">
                        <a className="hexLink" href="#">
                            <div className='img' style={{ backgroundImage: `url(${htmlLogo})` }}></div>
                            <h1 id="demo1">HTML</h1>
                            <p id="demo2">Standard language for documents designed to be displayed in a web browser.</p>
                        </a>
                        </div>
                    </li>

                    {/* <li className="hex">
                        <div className="hexIn">
                        <a className="hexLink" href="#">
                            <div className='img'></div>
                            <h1 id="demo1">This is a title</h1>
                            <p id="demo2">Some sample text about the article this hexagon leads to</p>
                        </a>
                        </div>
                    </li>
                    <li className="hex">
                        <div className="hexIn">
                        <a className="hexLink" href="#">
                            <div className='img' ></div>
                            <h1 id="demo1">This is a title</h1>
                            <p id="demo2">Some sample text about the article this hexagon leads to</p>
                        </a>
                        </div>
                    </li>
                    
                    <li className="hex">
                        <div className="hexIn">
                        <a className="hexLink" href="#">
                            <div className='img' ></div>
                            <h1 id="demo1">This is a title</h1>
                            <p id="demo2">Some sample text about the article this hexagon leads to</p>
                        </a>
                        </div>
                    </li>
                        <li className="hex">
                        <div className="hexIn">
                        <a className="hexLink" href="#">
                            <div className='img' ></div>
                            <h1 id="demo1">This is a title</h1>
                            <p id="demo2">Some sample text about the article this hexagon leads to</p>
                        </a>
                        </div>
                    </li>
                        <li className="hex">
                        <div className="hexIn">
                        <a className="hexLink" href="#">
                                <div className='img' ></div>
                            <h1 id="demo1">This is a title</h1>
                            <p id="demo2">Some sample text about the article this hexagon leads to</p>
                        </a>
                        </div>
                    </li>
                        <li className="hex">
                        <div className="hexIn">
                        <a className="hexLink" href="#">
                            <div className='img'></div>
                            <h1 id="demo1">This is a title</h1>
                            <p id="demo2">Some sample text about the article this hexagon leads to</p>
                        </a>
                        </div>
                    </li>
                        <li className="hex">
                        <div className="hexIn">
                        <a className="hexLink" href="#">
                            <div className='img' ></div>
                            <h1 id="demo1">This is a title</h1>
                            <p id="demo2">Some sample text about the article this hexagon leads to</p>
                        </a>
                        </div>
                    </li> */}
                </ul>
            </div>
        </div>
    )
}

export default Hexagons;