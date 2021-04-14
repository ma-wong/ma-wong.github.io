import React from "react";
import icebox1 from "./img/IceBox/icebox-home.png";
import icebox2 from "./img/IceBox/product.png";
import icebox3 from "./img/IceBox/search.png";

import Musicology1 from "./img/Musicology/eventsTab.png";
import Musicology2 from "./img/Musicology/musicology.png";
import Musicology3 from "./img/Musicology/socialTab.png";

import Snippets1 from "./img/Snippets/home.png";
import Snippets2 from "./img/Snippets/browse.png";
import Snippets3 from "./img/Snippets/details.png";


import "./style.css"

function ProjectCard() {
    return (
        <div>

            {/* Card 1 */}
            <div className="card mb-3 project-card">
                <div className="row g-0">
                    
                    <div id="carouselExampleIndicators-1" className="carousel slide col-md-7" data-bs-ride="carousel">
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
                    
                    <div className="col-md-5">
                        <div className="card-body project-card-body">

                            <h5 className="card-title portfolio-card-title">Snippets</h5>
                            
                            <div className="corner-frame">
                                <p className="card-text project-description">
                                    Snippets is an online application that allowd users to store snippets of code in a single organized library
                                    so that they can re-use boiler plate sections of their code in future projects. It also allows the user to search
                                    for keywords to return boiler plate code snippets that others have submitted publicaly.
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
                                    <button class="shrink-border project-btns">Deployed App</button>
                                </a>                               
                            </div>
                                             
                        </div>
                    </div>
                </div>
            </div>

            {/* card 2 */}
            <div className="card mb-3 project-card">
                <div className="row g-0">
                    
                    <div className="col-md-5">
                        <div className="card-body project-card-body">

                            <h5 className="card-title portfolio-card-title">ICE BOX</h5>

                            <div className="corner-frame">
                                <p className="card-text project-description">Icebox is an online sneaker encyclopedia.
                                    Icebox stores information about the collaborators, the release date, the production size range and the current price range for prospective buyers.
                                    On the search page, users can filter results by brand, collaborators, sizes, and more. This app is powered by javascript, express, and mysql.
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
                                    <button class="shrink-border project-btns">Deployed App</button>
                                </a>
                                
                            </div>
                    
                        </div>
                    </div>
                    
                    <div id="carouselExampleIndicators-2" className="carousel carousel-dark slide col-md-7" data-bs-ride="carousel">
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

            {/* card 4 */}
            <div className="card mb-3 project-card">
                <div className="row g-0">
                    
                    <div id="carouselExampleIndicators-3" className="carousel carousel-dark slide col-md-7" data-bs-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-bs-target="#carouselExampleIndicators-3" data-bs-slide-to="0" className="active"></li>
                            <li data-bs-target="#carouselExampleIndicators-3" data-bs-slide-to="1"></li>
                            <li data-bs-target="#carouselExampleIndicators-3" data-bs-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img src={Musicology1} className="d-block w-100 project-img" alt="..."/>
                            </div>
                            <div className="carousel-item">
                            <img src={Musicology2} className="d-block w-100 project-img" alt="..."/>
                            </div>
                            <div className="carousel-item">
                            <img src={Musicology3} className="d-block w-100 project-img" alt="..."/>
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
                    
                    <div className="col-md-5">
                        <div className="card-body project-card-body">

                            <h5 className="card-title portfolio-card-title">Musicology</h5>
                            <div className="corner-frame">
                                <p className="card-text project-description">
                                    Musicology is a clean interface tool for music fans who want to easily review an artists’ discography, social media and upcoming events.
                                    It is also a resource for those fans who are seeking new music by providing similar artist suggestions.
                                </p>
                            </div>

                            <ul class="list-group list-group-horizontal">
                                <li className="list-group-item project-tools flex-fill">Javascript</li>
                                <li className="list-group-item project-tools flex-fill">HTML/CSS</li>
                                <li className="list-group-item project-tools flex-fill">jQuery</li>
                                <li className="list-group-item project-tools flex-fill">Spotify API</li>
                            </ul>
                            <ul class="list-group list-group-horizontal">
                                <li className="list-group-item project-tools flex-fill">Taste Dive API</li>
                                <li className="list-group-item project-tools flex-fill">Bands In Town API</li>
                                <li className="list-group-item project-tools flex-fill">Musixmatch API</li>
                                <li className="list-group-item project-tools flex-fill">Moment.js</li>
                            </ul>

                            <div className="row">
                                <a href="https://github.com/mfitzwinick/binary-babes" target="_blank" className="col-md-6">
                                    <button class="shrink-border project-btns">Github Repo</button>
                                </a>
                                {/* <a href="https://infinite-castle-57105.herokuapp.com/" className="col-md-6" target="_blank">
                                    <button class="shrink-border project-btns">Deployed App</button>
                                </a> */}
                            </div>
                    
                        </div>
                    </div>
                </div>
            </div>

            

        </div>
    )
}

export default ProjectCard;