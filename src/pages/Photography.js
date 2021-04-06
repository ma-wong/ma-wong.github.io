import React, { Component } from "react";
import Gallery from "../components/Gallery";

class Photography extends Component {

    render() {
        return(
            <div>
                <div className="container">
                    
                    <div className="row">
                        <Gallery />
                    </div>
                    
                </div>

            </div>
            
        )
    }
}

export default Photography;