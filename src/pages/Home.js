import React, { Component } from "react";
import Hexagons from "../components/Hexagons";
import Header from "../components/Header";

class Home extends Component {

    render() {
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <Header />
                        <div className="col-md-2"></div>
                    </div>
                </div>
            
                <Hexagons />

            </div>
            
        )
    }
}

export default Home;