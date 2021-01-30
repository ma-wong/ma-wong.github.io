import React from "react";
import placeholder from "./img/test.png";
import "./style.css";

function Hexagons() {
    return (
        <div>
            <div className="grid">
                <ul id="hexGrid">
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
                    </li>
                    <li className="hex">
                        <div className="hexIn">
                        <a className="hexLink" href="#">
                            <div className='img' style={{ backgroundImage: `url(${placeholder})` }}></div>
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