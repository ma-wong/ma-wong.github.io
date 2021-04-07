import React, { Component } from "react";
import Biography from "../components/Biography";
import "../pageStyles/About.css";
import Skills from "../components/Skills";

class About extends Component {
    
    render() {
        return (
            <div className="container">
                <div className="row about-header-row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <hr />
                        <h1 id="about-header">ABOUT ME</h1>
                        <hr />
                    </div>
                    <div className="col-md-3"></div>
                </div>
                
    
                <Biography />

                <Skills />
                
            </div>
        )
    }
}

export default About;