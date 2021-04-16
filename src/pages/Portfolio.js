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
                <p id="featured-header" className="project-headers"><span className="underlined">Feature</span>d Projects</p>
                
                <ProjectCard />

                <p id="tile-header" className="project-headers"><span className="underlined">Other Not</span>eworthy Projects</p>
                <ProjectTiles />

                <Footer />
            </div>
        )
    }
}

export default Portfolio;