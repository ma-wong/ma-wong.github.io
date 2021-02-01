import React from "react";
import "./style.css";

function Footer() {
    return (
        <footer>
            <div className="row">
                <div className="col-md-8">
                    <ul className="footer-links">
                        <li className="list-inline-item"><a href="/">Home</a></li>
                        <li className="list-inline-item"><a href="/about">About</a></li>
                        <li className="list-inline-item"><a href="/portfolio">Portfolio</a></li>
                        <li className="list-inline-item"><a href="/contact">Contact Me</a></li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <div className="row">
                        <h5 id="quick-links-title" className="col-md-6">Quick Links:</h5>
                        <ul className="col-md-6 quick-links-list">
                            <li><a href="https://github.com/ma-wong">Github</a></li>
                            <li><a href="https://github.com/ma-wong">LinkedIn</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer;