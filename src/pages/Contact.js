import React, { Component } from "react";
import ContactCard from "../components/ContactCard";
import "../pageStyles/Contact.css";

class Contact extends Component {
    
    render() {
        return (
            <div className="container">

                <div className="row contact-header-row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <hr />
                        <h1 id="contact-header">CONTACT</h1>
                        <hr />
                    </div>
                    <div className="col-md-3"></div>
                </div>
                
                <ContactCard />
            </div>
        )
    }
}

export default Contact;