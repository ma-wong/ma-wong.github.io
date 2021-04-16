import React from "react";
import emailjs from "emailjs-com";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import githubIcon from "./img/white-github.png";
import linkedInIcon from "./img/linkedin.png";
import resumeDownload from "./assets/Resume.pdf";
import "./style.css";

function ContactCard() {


    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_dethx64', 'contact_form', e.target, 'user_fy9Wxu6PGeBEoiF6rpozI')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };

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
                            <div className="col-md-2 cIcon-div">
                                <FontAwesomeIcon className="contact-icon" icon="map-marker-alt"/>
                            </div>
                            <p className="col-md-8 contact-p">Irvine, CA</p>

                            <div className="col-md-2"></div>

                        </div>

                        <div className="row contact-info">
                            <div className="col-md-2 cIcon-div">
                                <FontAwesomeIcon className="contact-icon" icon="phone-alt"/>
                            </div>

                            <p className="col-md-8 contact-p">(949) 337-8617</p>

                            <div className="col-md-2"></div>
                        </div>

                        <div className="row contact-info">
                            <div className="col-md-2 cIcon-div">
                                <FontAwesomeIcon className="contact-icon" icon="envelope-open-text"/>
                            </div>

                            <p className="col-md-8 contact-p">mw.web.develop@gmail.com</p>

                            <div className="col-md-2"></div>
                        </div>

                        <a className="pdf-dwnld" href={resumeDownload} download="Resume">
                            <div className="row contact-info">
                                
                                <div className="col-md-2 cIcon-div">
                                    <FontAwesomeIcon className="contact-icon" icon="file-download"/>
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
                        <form className="contact-form" onSubmit={sendEmail}>

                            {/* name input */}
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label for="validationDefault01" className="form-label contact-form-label">First name</label>
                                    <input name="from_firstName" type="text" className="form-control contact-form-input" id="validationDefault01" required />
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label for="validationDefault02" className="form-label contact-form-label">Last name</label>
                                    <input name="from_lastName" type="text" className="form-control contact-form-input" id="validationDefault02" required />
                                </div>
                            </div>

                            {/* email input */}
                            <div className="row">
                                <div className="col-md-12 mb-3">
                                    <label for="validationDefault03" className="form-label contact-form-label">Email address</label>
                                    <input name="from_email" type="email" className="form-control contact-form-input" id="validationDefault03" placeholder="name@example.com" required />
                                </div>
                            </div>

                            {/* comment input */}
                            <div className="row">
                                <div className="col-md-12 mb-3">
                                    <label for="validationDefault05" className="form-label contact-form-label">Comments</label>
                                    <textarea name="comment" type="text" className="form-control contact-form-input" id="validationDefault05" rows="8" required />
                                </div>
                            </div>
                            
                            {/* submit btn */}
                            <div className="d-grid gap-2 col-6 mx-auto">
                                <button type="submit" value="send" class="shrink-border1 submit-btn">SUBMIT</button>                              
                            </div>
                            
                        </form>

                    </div>

                    


                </div>
                
            </div>

            {/* <button type="button" class="btn btn-primary" id="liveToastBtn">Show live toast</button>

            <div class="position-fixed bottom-0" style={{"z-index": 5}}>
                <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                    <div class="toast-header">
                    <img src="..." class="rounded me-2" alt="..."/>
                    <strong class="me-auto">Bootstrap</strong>
                    <small>11 mins ago</small>
                    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                    <div class="toast-body">
                    Hello, world! This is a toast message.
                    </div>
                </div>
            </div> */}

        </div>
    )
}

export default ContactCard;