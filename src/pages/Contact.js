import React, { Component } from "react";
import ContactCard from "../components/ContactCard";
// import Jumbotron from "../components/Jumbotron";

class Contact extends Component {
    
    render() {
        return (
            <div className="container">

                <div className="row about-header-row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <hr />
                        <h1 id="about-header">CONTACT</h1>
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