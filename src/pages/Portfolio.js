import React, { Component } from "react";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";

class Portfolio extends Component {

    constructor(props) {
        super(props)

        this.state = {
            title: "MY WORK"
        }
    }

    render() {
        return (
            <div className="container">

                <PageHeader
                    title={this.state.title}
                />
                
                <ProjectCard />

                <Footer />
            </div>
        )
    }
}

export default Portfolio;