import React from "react";
import icebox1 from "./img/IceBox/icebox-home.png";
import icebox2 from "./img/IceBox/product.png";
import icebox3 from "./img/IceBox/search.png";

import Snippets1 from "./img/Snippets/home.png";
import Snippets2 from "./img/Snippets/browse.png";
import Snippets3 from "./img/Snippets/details.png";

import Archies1 from "./img/Archies/archies1.png";
import Archies2 from "./img/Archies/archies2.png";
import Archies3 from "./img/Archies/archies3.png";


import "./style.css"

function ProjectCard() {
    return (
        <div>

            <div className="card mb-3 project-card">
                <div className="row g-0">
            
                    <div id="carouselExampleIndicators-1" className="carousel slide col-md-6" data-bs-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-bs-target="#carouselExampleIndicators-1" data-bs-slide-to="0" className="active"></li>
                            <li data-bs-target="#carouselExampleIndicators-1" data-bs-slide-to="1"></li>
                            <li data-bs-target="#carouselExampleIndicators-1" data-bs-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img src={Snippets1} className="d-block w-100 project-img" alt="..."/>
                            </div>
                            <div className="carousel-item">
                            <img src={Snippets2} className="d-block w-100 project-img" alt="..."/>
                            </div>
                            <div className="carousel-item">
                            <img src={Snippets3} className="d-block w-100 project-img" alt="..."/>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators-1" role="button" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators-1" role="button" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </a>
                    </div>
                    
                    <div className="col-md-6 description-div">
                        <div className="card-body project-card-body">

                            <h5 className="card-title portfolio-card-title">Snippets</h5>
                            
                            <div className="corner-frame">
                                <p className="card-text project-description">
                                    An easier way to access and re-use boiler plate sections of code for future projects. Stores snippets of code in a single organnized library.
                                    Search for keywords to return boiler plate code snippets that you or others have submitted publicaly.
                                </p>
                            </div>

                            <ul class="list-group list-group-horizontal">
                                <li className="list-group-item project-tools flex-fill">React</li>
                                <li className="list-group-item project-tools flex-fill">Node.js</li>
                                <li className="list-group-item project-tools flex-fill">Cloudinary</li>
                                <li className="list-group-item project-tools flex-fill">Highlight.js</li>
                            </ul>

                            <ul class="list-group list-group-horizontal">
                                <li className="list-group-item project-tools flex-fill">HTML/CSS</li>
                                <li className="list-group-item project-tools flex-fill">MySQL</li>
                                <li className="list-group-item project-tools flex-fill">Express</li>
                                <li className="list-group-item project-tools flex-fill">Passport</li>
                            </ul>

                            <div className="row">
                                <a href="https://github.com/ma-wong/project-3" target="_blank" className="col-md-6">
                                    <button class="shrink-border project-btns">Github Repo</button>
                                </a>
                                <a href="#" className="col-md-6" target="_blank">
                                    <button class="shrink-border project-btns">Deployed</button>
                                </a>                               
                            </div>
                                             
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="card mb-3 project-card">
                <div className="row g-0">
                    
                    <div className="col-md-6 description-div">
                        <div className="card-body project-card-body">

                            <h5 className="card-title portfolio-card-title">ICE BOX</h5>

                            <div className="corner-frame">
                                <p className="card-text project-description">An online sneaker encyclopedia that stores information about the collaborators, the release date, the production size range and the current price range for prospective buyers.
                                    Search and filter through results by brand, collaborators, sizes, release date, and more.
                                </p>
                            </div>

                            <ul class="list-group list-group-horizontal">
                                <li className="list-group-item project-tools flex-fill">Javascript</li>
                                <li className="list-group-item project-tools flex-fill">Node.js</li>
                                <li className="list-group-item project-tools flex-fill">Express</li>
                                <li className="list-group-item project-tools flex-fill">MySQL</li>
                            </ul>
                            <ul class="list-group list-group-horizontal">
                                <li className="list-group-item project-tools flex-fill">HTML/CSS</li>
                                <li className="list-group-item project-tools flex-fill">Bootstrap</li>
                            </ul>

                            <div className="row">
                                <a href="https://github.com/ma-wong/icebox" target="_blank" className="col-md-6">
                                    <button class="shrink-border project-btns">Github Repo</button>
                                </a>
                                <a href="https://infinite-castle-57105.herokuapp.com/" className="col-md-6" target="_blank">
                                    <button class="shrink-border project-btns">Deployed</button>
                                </a>
                                
                            </div>
                    
                        </div>
                    </div>
                    
                    <div id="carouselExampleIndicators-2" className="carousel carousel-dark slide col-md-6" data-bs-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-bs-target="#carouselExampleIndicators-2" data-bs-slide-to="0" className="active"></li>
                            <li data-bs-target="#carouselExampleIndicators-2" data-bs-slide-to="1"></li>
                            <li data-bs-target="#carouselExampleIndicators-2" data-bs-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img src={icebox1} className="d-block w-100 project-img" alt="..."/>
                            </div>
                            <div className="carousel-item">
                            <img src={icebox2} className="d-block w-100 project-img" alt="..."/>
                            </div>
                            <div className="carousel-item">
                            <img src={icebox3} className="d-block w-100 project-img" alt="..."/>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators-2" role="button" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators-2" role="button" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </a>
                    </div>
                </div>
            </div>


            <div className="card mb-3 project-card">
                <div className="row g-0">
                    
                    <div id="carouselExampleIndicators-3" className="carousel carousel-dark slide col-md-6" data-bs-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-bs-target="#carouselExampleIndicators-3" data-bs-slide-to="0" className="active"></li>
                            <li data-bs-target="#carouselExampleIndicators-3" data-bs-slide-to="1"></li>
                            <li data-bs-target="#carouselExampleIndicators-3" data-bs-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img src={Archies1} className="d-block w-100 project-img" alt="..."/>
                            </div>
                            <div className="carousel-item">
                            <img src={Archies2} className="d-block w-100 project-img" alt="..."/>
                            </div>
                            <div className="carousel-item">
                            <img src={Archies3} className="d-block w-100 project-img" alt="..."/>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators-3" role="button" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators-3" role="button" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </a>
                    </div>
                    
                    <div className="col-md-6 description-div">
                        <div className="card-body project-card-body">

                            <h5 className="card-title portfolio-card-title">Archie's Ice Cream</h5>
                            <div className="corner-frame">
                                <p className="card-text project-description">
                                    Complete overhaul and redesign of Archie's Ice Cream website using Squarespace.
                                    Custom graphics/logos were made with Photoshop and Procreate.
                                </p>
                            </div>

                            <ul class="list-group list-group-horizontal">
                                <li className="list-group-item project-tools flex-fill">Squarespace</li>
                                <li className="list-group-item project-tools flex-fill">Photoshop</li>
                                <li className="list-group-item project-tools flex-fill">Procreate</li>
                            </ul>

                            <div className="row">
                                <a href="https://www.archiesicecream.com" target="_blank" className="col-md-6">
                                    <button class="shrink-border project-btns">Deployed</button>
                                </a>
                            </div>
                    
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProjectCard;