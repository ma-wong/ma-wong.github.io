import React, { Component } from "react";
import ProjectCard from "../components/ProjectCard";
import "../pageStyles/Portfolio.css";
import Footer from "../components/Footer";

class Portfolio extends Component {

    render() {
        return (
            <div className="container">

                <div className="row portfolio-header-row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <hr />
                        <h1 id="portfolio-header">MY WORK</h1>
                        <hr />
                    </div>
                    <div className="col-md-3"></div>
                </div>
                
                <ProjectCard />

                <Footer />
            </div>
        )
    }
}

export default Portfolio;