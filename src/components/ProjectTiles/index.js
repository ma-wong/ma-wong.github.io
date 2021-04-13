import React from "react";
import "./style.css";

function ProjectTiles() {
    
    return(
        
        <ul className="tile-grid">
            <div className="row">
                <li className="col-md-3 project-tile">
                    <a href="#">
                    <div className="tile-primary-content">
                        <img src="http://albumcoverart.files.wordpress.com/2010/04/fleet-foxes-lp.jpg" alt=""/>
                    </div>
                    <div className="tile-secondary-content">
                        <h2>Music</h2>
                        <p>Fleet Foxes</p>
                    </div>
                    </a>
                </li>

                <li className="col-md-3 project-tile">
                    <a href="#">
                    <div className="tile-primary-content">
                        <img src="http://albumcoverart.files.wordpress.com/2010/04/fleet-foxes-lp.jpg" alt=""/>
                    </div>
                    <div className="tile-secondary-content">
                        <h2>Music</h2>
                        <p>Fleet Foxes</p>
                    </div>
                    </a>
                </li>

                <li className="col-md-3 project-tile">
                    <a href="#">
                    <div className="tile-primary-content">
                        <img src="http://albumcoverart.files.wordpress.com/2010/04/fleet-foxes-lp.jpg" alt=""/>
                    </div>
                    <div className="tile-secondary-content">
                        <h2>Music</h2>
                        <p>Fleet Foxes</p>
                    </div>
                    </a>
                </li>

                <li className="col-md-3 project-tile">
                    <a href="#">
                    <div className="tile-primary-content">
                        <img src="http://albumcoverart.files.wordpress.com/2010/04/fleet-foxes-lp.jpg" alt=""/>
                    </div>
                    <div className="tile-secondary-content">
                        <h2>Music</h2>
                        <p>Fleet Foxes</p>
                    </div>
                    </a>
                </li>

            </div>

            
        
        </ul>
    )
}

export default ProjectTiles;