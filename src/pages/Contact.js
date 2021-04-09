import React, { Component } from "react";
import ContactCard from "../components/ContactCard";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader"

class Contact extends Component {

    constructor(props) {
        super(props)

        this.state = {
            title: "CONTACT"
        }
    }
    
    render() {
        return (
            <div className="container">

                <PageHeader
                    title={this.state.title}
                />
                
                <ContactCard />

                <Footer />
            </div>
        )
    }
}

export default Contact;