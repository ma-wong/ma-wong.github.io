import React from "react";
import "./style.css";

function Skills() {
    
    return(
        
        <div class="main-wrapper">
            <div class="skills-badge yellow">
                <div class="circle"> <i class="fa fa-bolt"></i></div>
                <div class="ribbon">Initiator</div>
            </div>
            <div class="skills-badge orange">
                <div class="circle"> <i class="fa fa-wheelchair-alt"></i></div>
                <div class="ribbon">Disabler</div>
            </div>
            <div class="skills-badge pink">
                <div class="circle"> <i class="fa fa-pied-piper"></i></div>
                <div class="ribbon">Nuker</div>
            </div>
            <div class="skills-badge red">
                <div class="circle"> <i class="fa fa-shield"></i></div>
                <div class="ribbon">Ganker</div>
            </div>
            <div class="skills-badge purple">
                <div class="circle"> <i class="fa fa-anchor"></i></div>
                <div class="ribbon">Durable</div>
            </div>
            <div class="skills-badge teal">
                <div class="circle"> <i class="fa fa-bicycle"></i></div>
                <div class="ribbon">Roamer</div>
            </div>
            <div class="skills-badge blue">
                <div class="circle"> <i class="fa fa-users"></i></div>
                <div class="ribbon">Pusher</div>
            </div>
            <div class="skills-badge blue-dark">
                <div class="circle"> <i class="fa fa-rocket"></i></div>
                <div class="ribbon">Escape</div>
            </div>
            <div class="skills-badge green">
                <div class="circle"> <i class="fa fa-tree"></i></div>
                <div class="ribbon">Jungler</div>
            </div>
            <div class="skills-badge green-dark">
                <div class="circle"> <i class="fa fa-user fa-street-view"></i></div>
                <div class="ribbon">Offlaner</div>
            </div>
            <div class="skills-badge silver">
                <div class="circle"> <span class="font">AFK</span></div>
                <div class="ribbon">Carry</div>
            </div>
            <div class="skills-badge gold">
                <div class="circle"> <i class="fa fa-magic"></i></div>
                <div class="ribbon">Support</div>
            </div>
        </div>
        
    )
}

export default Skills;