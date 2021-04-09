import React from "react";
import "./style.css";

function Header({ title }) {
    
    return(
        <div className="row page-header-row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
                <hr />
                <h1 id="page-header">{title}</h1>
                <hr />
            </div>
            <div className="col-md-3"></div>
        </div>
        
    )
}

export default Header;