import React, { Component } from "react";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";

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
                
                <Gallery />
                
                <Footer />
                
            </div>
        
            
        )
    }
}

export default Photography;