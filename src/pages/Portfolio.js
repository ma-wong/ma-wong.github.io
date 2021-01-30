import React, { Component } from "react";
import ProjectCard from "../components/ProjectCard";
import "../pageStyles/Portfolio.css";

class Portfolio extends Component {

    render() {
        return (
            <div className="container">
                <hr />
                <h1 id="portfolio-header">MY WORK</h1>
                <ProjectCard />
            </div>
        )
    }
}

export default Portfolio;