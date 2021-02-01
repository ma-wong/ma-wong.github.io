import React, { Component } from "react";
import Hexagons from "../components/Hexagons";
import "../pageStyles/Home.css";

class Home extends Component {

    render() {
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="home-header col-md-8">
                            <h1 id="home-title">Hello, I'm <span id="home-name">Morgan Wong.</span></h1>
                            <p id="home-description">
                                I'm a full-stack web developer and designer.
                            </p>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>
            
                <Hexagons />

            </div>
            
        )
    }
}

export default Home;