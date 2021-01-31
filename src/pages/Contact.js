import React, { Component } from "react";
import ContactCard from "../components/ContactCard";
import Jumbotron from "../components/Jumbotron";

class Contact extends Component {
    
    render() {
        return (
            <div>
                <Jumbotron />
                <ContactCard />
            </div>
        )
    }
}

export default Contact;