import React, { Component } from "react";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import "../pageStyles/Photography.css";

class Photography extends Component {

    constructor(props) {
        super(props)

        this.state = {
            title: "GALLERY"
        }
    }

    render() {
        return(
        
            <div className="container">

                <PageHeader
                    title={this.state.title}
                />
                <p id="gallery-desc">
                    Over the past years, I have enjoyed photography as both a profession and personal hobby.
                    While my area of focus is event photography (festivals, weddings, concerts), I also enjoy capturing nature and subjects in motion.
                    Below is a small sample of my work that showcases my style, hope you enjoy!
                </p>
                
                <Gallery />
                
                <Footer />
                
            </div>
        
            
        )
    }
}

export default Photography;