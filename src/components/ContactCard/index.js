import React from "react";

import locationIcon from "./img/location.png";
import phoneIcon from "./img/phone.png";
import emailIcon from "./img/email.png";
import downloadIcon from "./img/download.png";

import githubIcon from "./img/white-github.png";
import linkedInIcon from "./img/linkedin.png";
import resumeDownload from "./assets/Resume.pdf";
import "./style.css";

function ContactCard() {

    // function sendMessage(event) {
    //     event.preventDefault();
    //     let firstName = document.getElementById("contact-first").value.trim();
    //     let lastName = document.getElementById("contact-last").value.trim();
    //     let email = document.getElementById("contact-email").value.trim();
    //     let comment = document.getElementById("contact-comment").value.trim();

    //     let message = {
    //         first: firstName,
    //         last: lastName,
    //         email: email,
    //         comment: comment
    //     }
    //     console.log(message);


    // }

    return (

        <div>
        
            <div className="card contact-card">
                
                <div className="row">

                    

                    {/* Contact Info */}
                    <div id="contact-info-div" className="col-md-6">

                        <div className="contact-description">
                            <h2 id="get-in-touch"><span id="get-in">Get i</span>n touch!</h2>
                            <p>
                                While I'm currently interested in freelance work, my inbox is open to ALL new opportunities.
                                Feel free to use the form for questions, requests, or just to say hi!
                            </p>
                        </div>
                    
                        <div className="row contact-info">
                            <div className="col-md-2">
                                <img className="contact-icons" src={locationIcon} />
                            </div>
                            <p className="col-md-8 contact-p">Irvine, CA</p>

                            <div className="col-md-2"></div>

                        </div>

                        <div className="row contact-info">
                            <div className="col-md-2">
                                <img className="contact-icons" src={phoneIcon}></img>
                            </div>

                            <p className="col-md-8 contact-p">(949) 337-8617</p>

                            <div className="col-md-2"></div>
                        </div>

                        <div className="row contact-info">
                            <div className="col-md-2">
                                <img className="contact-icons" src={emailIcon}></img>
                            </div>

                            <p className="col-md-8 contact-p">mw.web.develop@gmail.com</p>

                            <div className="col-md-2"></div>
                        </div>

                        <a className="pdf-dwnld" href={resumeDownload} download="Resume">
                            <div className="row contact-info">
                                
                                <div className="col-md-2">
                                    <img className="contact-icons" src={downloadIcon}></img>
                                </div>
                                
                                <p className="col-md-8 contact-p">Download Resume</p>

                                <div className="col-md-2"></div>
                                
                            </div>
                        </a>

                        <div className="icon-container">
                            <hr></hr>
                            <a href="https://github.com/ma-wong" target="_blank" rel="noopener noreferrer">
                                <img id="gh-icon" className="social-icons" src={githubIcon}></img>
                            </a>
                            <a href="https://linkedin.com/in/morgan-wong-95b305207" target="_blank" rel="noopener noreferrer">
                                <img className="social-icons" src={linkedInIcon}></img>
                            </a>
                        </div>

                    </div>

                    {/* Contact Form */}
                    <div className="col-md-6 contact-input">
                        
                        <form>

                            {/* name input */}
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label for="validationDefault01" className="form-label contact-form-label">First name</label>
                                    <input id="contact-first" type="text" className="form-control contact-form-input" id="validationDefault01" required />
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label for="validationDefault02" className="form-label contact-form-label">Last name</label>
                                    <input id="contact-last" type="text" className="form-control contact-form-input" id="validationDefault02" required />
                                </div>
                            </div>

                            {/* email input */}
                            <div className="row">
                                <div className="col-md-12 mb-3">
                                    <label for="validationDefault03" className="form-label contact-form-label">Email address</label>
                                    <input id="contact-email" type="email" className="form-control contact-form-input" id="validationDefault03" placeholder="name@example.com" required />
                                </div>
                            </div>

                            {/* comment input */}
                            <div className="row">
                                <div className="col-md-12 mb-3">
                                    <label for="validationDefault05" className="form-label contact-form-label">Comments</label>
                                    <textarea id="contact-comment" type="text" className="form-control contact-form-input" id="validationDefault05" rows="8" required />
                                </div>
                            </div>
                            
                            {/* submit btn */}
                            <div className="d-grid gap-2 col-6 mx-auto">
                                <button class="shrink-border1 submit-btn">SUBMIT</button>                              
                            </div>
                            
                        </form>

                    </div>


                </div>
                
            </div>
        </div>
    )
}

export default ContactCard;