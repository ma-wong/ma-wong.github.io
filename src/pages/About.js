import React, { Component } from "react";
import Biography from "../components/Biography";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";

class About extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: "ABOUT"
        }
    }
    
    render() {
        return (
            <div className="container">
                
                <PageHeader
                    title={this.state.title}
                />
    
                <Biography />

                <Skills />

                <Footer />
                
            </div>
        )
    }
}

export default About;