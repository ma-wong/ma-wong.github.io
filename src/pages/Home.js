import React, { Component } from "react";
import Hexagons from "../components/Hexagons";

class Home extends Component {

    render() {
        return(
            <div>
                <h1>Hammy Bears</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni a eius incidunt libero ullam tenetur numquam, nulla porro.
                    Voluptatum quasi provident tempora animi quo iste praesentium distinctio, saepe suscipit in?
                </p>
                <Hexagons />
                
            </div>
        )
    }
}

export default Home;