import React, { Component } from "react";
import Header from "../components/Header";
import "../pageStyles/Splash.css";

class Splash extends Component {

    render() {
        return(
            <div>
                <div class="bg"></div>
                <div class="bg bg2"></div>
                <div class="bg bg3"></div>
                <div class="content">
                    <Header />
                </div>

            </div>
            
        )
    }
}

export default Splash;