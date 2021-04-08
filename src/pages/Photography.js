import React, { Component } from "react";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import "../pageStyles/Photography.css";

class Photography extends Component {

    render() {
        return(
        
            <div className="container">

                <div className="row photo-header-row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <hr />
                        <h1 id="photo-header">GALLERY</h1>
                        <hr />
                    </div>
                    <div className="col-md-3"></div>
                </div>
                
                <Gallery />
                
                <Footer />
                
            </div>
        
            
        )
    }
}

export default Photography;