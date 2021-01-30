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
                            <h1 id="home-title">Hammy Bears</h1>
                            <p id="home-description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni a eius incidunt libero ullam tenetur numquam, nulla porro.
                                Voluptatum quasi provident tempora animi quo iste praesentium distinctio, saepe suscipit in?
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