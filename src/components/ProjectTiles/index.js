import React from "react";
import "./style.css";
import Archies from "./imgs/archies.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ProjectTiles() {
    
    return(
 
        <div>

            <div className="row wrap">
                <div className="tile">
                    <img src={Archies} />
                    <div className="text">
                        {/* <h1>Lorem ipsum.</h1> */}
                        <h2 className="animate-text">Archie's Ice Cream</h2>
                        <p className="animate-text">
                            Complete overhaul and redesign of Archie's Ice Cream website using Squarespace.
                            Custom graphics/logos were made with photoshop and Procreate
                        </p>
                        <div className="animate-text tile-icon-div">
                            <a href="" className="tile-link"><FontAwesomeIcon className="tile-icon" icon={['fab', 'github']}/></a>
                            <a href="https://www.archiesicecream.com" className="tile-link"><FontAwesomeIcon className="tile-icon" icon="external-link-alt"/></a>
                        </div>
                        <div className="dots">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>

                <div className="tile">
                    <img src='https://images.unsplash.com/photo-1458668383970-8ddd3927deed?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1004&q=80' />
                    <div className="text">
                        <h2 className="animate-text">Employee Tracker</h2>
                        <p className="animate-text">
                            A terminal based app that allows business owners to view/manage employees, department, and roles withinn a designated employee database.
                            Built with Javascript, jQuery, mySQL, and Node.js
                        </p>
                        <div className="animate-text tile-icon-div">
                            <a href="https://github.com/ma-wong/employee-tracker" className="tile-link"><FontAwesomeIcon className="tile-icon" icon={['fab', 'github']}/></a>
                            <a href="" className="tile-link"><FontAwesomeIcon className="tile-icon" icon="external-link-alt"/></a>
                        </div>
                        <div className="dots">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>

                <div className="tile">
                    <img src='https://images.unsplash.com/photo-1458668383970-8ddd3927deed?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1004&q=80' />
                    <div className="text">
                        {/* <h1>Lorem ipsum.</h1> */}
                        <h2 className="animate-text">Musicology</h2>
                        <p className="animate-text">
                            A single web application that combines several APIs to allow users to easily review an music artists’ discography, social media, upcoming events, annd similar artists 
                        </p>

                        <div className="animate-text tile-icon-div">
                            <a href="https://github.com/mfitzwinick/binary-babes" className="tile-link"><FontAwesomeIcon className="tile-icon" icon={['fab', 'github']}/></a>
                            <a href="" className="tile-link"><FontAwesomeIcon className="tile-icon" icon="external-link-alt"/></a>
                        </div>

                        <div className="dots">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>

                <div className="tile">
                    <img src='https://images.unsplash.com/photo-1458668383970-8ddd3927deed?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1004&q=80' />
                    <div className="text">
                        {/* <h1>Lorem ipsum.</h1> */}
                        <h2 className="animate-text">More lorem ipsum bacon ipsum.</h2>
                        <p className="animate-text">Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto kevin turducken. </p>
                        <div className="animate-text tile-icon-div">
                            <a href="" className="tile-link"><FontAwesomeIcon className="tile-icon" icon={['fab', 'github']}/></a>
                            <a href="" className="tile-link"><FontAwesomeIcon className="tile-icon" icon="external-link-alt"/></a>
                        </div>
                        <div className="dots">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>

                <div className="tile">
                    <img src='https://images.unsplash.com/photo-1458668383970-8ddd3927deed?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1004&q=80' />
                    <div className="text">
                        {/* <h1>Lorem ipsum.</h1> */}
                        <h2 className="animate-text">More lorem ipsum bacon ipsum.</h2>
                        <p className="animate-text">Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto kevin turducken. </p>
                        <div className="animate-text tile-icon-div">
                            <a href="" className="tile-link"><FontAwesomeIcon className="tile-icon" icon={['fab', 'github']}/></a>
                            <a href="" className="tile-link"><FontAwesomeIcon className="tile-icon" icon="external-link-alt"/></a>
                        </div>
                        <div className="dots">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>

                <div className="tile">
                    <img src='https://images.unsplash.com/photo-1458668383970-8ddd3927deed?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1004&q=80' />
                    <div className="text">
                        {/* <h1>Lorem ipsum.</h1> */}
                        <h2 className="animate-text">More lorem ipsum bacon ipsum.</h2>
                        <p className="animate-text">Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto kevin turducken. </p>
                        <div className="animate-text tile-icon-div">
                            <a href="" className="tile-link"><FontAwesomeIcon className="tile-icon" icon={['fab', 'github']}/></a>
                            <a href="" className="tile-link"><FontAwesomeIcon className="tile-icon" icon="external-link-alt"/></a>
                        </div>
                        <div className="dots">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>

            </div>


        </div>
        
    )
}

export default ProjectTiles;