import React from "react";

import githubIcon from "./img/github.png";
import linkedInIcon from "./img/linkedin.png";
import "./style.css";

function ContactCard() {
    return (
        <div className="container">
            <div className="card contact-card">
                {/* <div className="card-body"> */}
                    <div className="row">

                        {/* Contact Form */}
                        <div className="col-md-8 contact-input">
                            <h2 id="contact-input-header">CONTACT ME</h2>
                            
                            <form>

                                {/* name input */}
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label for="validationDefault01" className="form-label">First name</label>
                                        <input type="text" className="form-control" id="validationDefault01" required />
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <label for="validationDefault02" className="form-label">Last name</label>
                                        <input type="text" className="form-control" id="validationDefault02" required />
                                    </div>
                                </div>
                                {/* email input */}
                                <div className="row">
                                    <div className="col-md-12 mb-3">
                                        <label for="validationDefault03" className="form-label">Email address</label>
                                        <input type="email" className="form-control" id="validationDefault03" placeholder="name@example.com" required />
                                    </div>
                                </div>

                                {/* comment input */}
                                <div className="row">
                                    <div className="col-md-12 mb-3">
                                        <label for="validationDefault05" className="form-label">Comments</label>
                                        <textarea type="text" className="form-control" id="validationDefault05" rows="8" required />
                                    </div>
                                </div>
                                
                                {/* submit btn */}
                                <div className="d-grid gap-2 col-6 mx-auto">
                                    <button className="btn btn-primary" type="submit">Submit</button>
                                </div>
                                
                            </form>

                        </div>



                        {/* Contact Info */}
                        <div id="contact-info-div" className="col-md-4">
                        
                            <div className="row contact-info">
                                <h6>EMAIL</h6>
                                <p className="contact-p">mw.web.develop@gmail.com</p>
                            </div>

                            <div className="row contact-info">
                                <h6>TELEPHONE</h6>
                                <p className="contact-p">(949) 337-8617</p>
                            </div>

                            <div className="row contact-info">
                                <h6>LOCATION</h6>
                                <p className="contact-p">Irvine, CA</p>
                            </div>
                            
                            <div className="icon-container contact-info">
                                <a href="https://github.com/ma-wong">
                                    <img id="gh-icon" className="contact-icons" src={githubIcon}></img>
                                </a>
                                <a href="https://github.com/ma-wong">
                                    <img className="contact-icons" src={linkedInIcon}></img>
                                </a>
                            </div>

                        </div>


                    </div>
                {/* </div> */}
            </div>
        </div>
    )
}

export default ContactCard;