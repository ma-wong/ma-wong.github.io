import React, { Component } from "react";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import ProjectTiles from "../components/ProjectTiles";
import "../pageStyles/Portfolio.css";

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

                <p id="tiles-header">Other Noteworthy Projects</p>
                <ProjectTiles />

                <Footer />
            </div>
        )
    }
}

export default Portfolio;