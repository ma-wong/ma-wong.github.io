import React, { Component } from "react";
import Hexagons from "../components/Hexagons/test2.js";
import Header from "../components/Header";

class Home extends Component {

    render() {
        return(
            <div>
                <div className="container">
                    
                    <div className="row">
                        <Header />
                    </div>

                    <Hexagons />

                </div>

            </div>
            
        )
    }
}

export default Home;