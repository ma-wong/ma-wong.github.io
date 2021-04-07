import React from "react";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Skills() {
    
    return(
        
        <div class="main-wrapper">
            <div class="skills-badge yellow">
                <div class="circle"> <FontAwesomeIcon className="fa" icon={['fab', 'js-square']} /></div>
                <div class="ribbon">Javascript</div>
            </div>
            <div class="skills-badge orange">
                <div class="circle"> <FontAwesomeIcon className="fa" icon={['fab', 'react']} /></div>
                <div class="ribbon">React.js</div>
            </div>
            <div class="skills-badge pink">
                <div class="circle"> <FontAwesomeIcon className="fa" icon={['fab', 'html5']} /></div>
                <div class="ribbon">HTML</div>
            </div>
            <div class="skills-badge red">
                <div class="circle"> <FontAwesomeIcon className="fa" icon={['fab', 'css3']}/></div>
                <div class="ribbon">CSS</div>
            </div>
            <div class="skills-badge purple">
                <div class="circle"> <FontAwesomeIcon className="fa" icon="images"/></div>
                <div class="ribbon">jQuery</div>
            </div>
            <div class="skills-badge teal">
                <div class="circle"> <FontAwesomeIcon className="fa" icon="database"/></div>
                <div class="ribbon">MySQL</div>
            </div>
            <div class="skills-badge blue">
                <div class="circle"> <FontAwesomeIcon className="fa" icon={['fab', 'node-js']} /></div>
                <div class="ribbon">Node.js</div>
            </div>
            <div class="skills-badge blue-dark">
                <div class="circle"> <FontAwesomeIcon className="fa" icon={['fab', 'bootstrap']} /></div>
                <div class="ribbon">Bootstrap</div>
            </div>
            <div class="skills-badge green">
                <div class="circle"> <FontAwesomeIcon className="fa" icon="database"/></div>
                <div class="ribbon">MongoDB</div>
            </div>
            <div class="skills-badge green-dark">
                <div class="circle"> <FontAwesomeIcon className="fa" icon="server"/></div>
                <div class="ribbon">Express.js</div>
            </div>
            <div class="skills-badge silver">
                <div class="circle"> <FontAwesomeIcon className="fa" icon="images"/></div>
                <div class="ribbon">Photoshop</div>
            </div>
            <div class="skills-badge gold">
                <div class="circle"> <FontAwesomeIcon className="fa" icon="paint-brush"/></div>
                <div class="ribbon">Procreate</div>
            </div>
        </div>
        
    )
}

export default Skills;