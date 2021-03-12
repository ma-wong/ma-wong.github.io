import React from "react";

import githubIcon from "./img/github.png";
import linkedInIcon from "./img/linkedin.png";
import resumeDownload from "./assets/web-resume.pdf";
import "./style.css";

function ContactCard() {
    return (
        <div className="card contact-card">
            
            <div className="row">

                {/* Contact Form */}
                <div className="col-md-8 contact-input">
                    <h2 id="contact-input-header">CONTACT ME</h2>
                    
                    <form>

                        {/* name input */}
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label for="validationDefault01" className="form-label contact-form-label">First name</label>
                                <input type="text" className="form-control contact-form-input" id="validationDefault01" required />
                            </div>

                            <div className="col-md-6 mb-3">
                                <label for="validationDefault02" className="form-label contact-form-label">Last name</label>
                                <input type="text" className="form-control contact-form-input" id="validationDefault02" required />
                            </div>
                        </div>
                        {/* email input */}
                        <div className="row">
                            <div className="col-md-12 mb-3">
                                <label for="validationDefault03" className="form-label contact-form-label">Email address</label>
                                <input type="email" className="form-control contact-form-input" id="validationDefault03" placeholder="name@example.com" required />
                            </div>
                        </div>

                        {/* comment input */}
                        <div className="row">
                            <div className="col-md-12 mb-3">
                                <label for="validationDefault05" className="form-label contact-form-label">Comments</label>
                                <textarea type="text" className="form-control contact-form-input" id="validationDefault05" rows="8" required />
                            </div>
                        </div>
                        
                        {/* submit btn */}
                        <div className="d-grid gap-2 col-6 mx-auto">
                            <button id="submit-btn" className="btn btn-success" type="submit">Submit</button>
                        </div>
                        
                    </form>

                </div>



                {/* Contact Info */}
                <div id="contact-info-div" className="col-md-4">
                
                    <div className="row contact-info">
                        <h5>EMAIL</h5>
                        <p className="contact-p">mw.web.develop@gmail.com</p>
                    </div>

                    <div className="row contact-info">
                        <h5>TELEPHONE</h5>
                        <p className="contact-p">(949) 337-8617</p>
                    </div>

                    <div className="row contact-info">
                        <h5>LOCATION</h5>
                        <p className="contact-p">Irvine, CA</p>
                    </div>
                    
                    <div className="icon-container contact-info">
                        <a href="https://github.com/ma-wong" target="_blank" rel="noopener noreferrer">
                            <img id="gh-icon" className="contact-icons" src={githubIcon}></img>
                        </a>
                        <a href="https://linkedin.com/in/morgan-wong-95b305207" target="_blank" rel="noopener noreferrer">
                            <img className="contact-icons" src={linkedInIcon}></img>
                        </a>
                    </div>

                    <div>
                        <a href={resumeDownload} download="Resume">
                            <button id="download-btn" type="button" className="btn btn-outline-light" >DOWNLOAD RESUME <i className="fa fa-file-pdf-o"></i></button>
                        </a>
                    </div>

                </div>


            </div>
            
        </div>
    )
}

export default ContactCard;