import React from "react";
import "./style.css";

import snails from "./img/snails.jpg";
import carousel from "./img/carousel.jpg";
import caterpillar from "./img/caterpillar.jpg";
import gator from "./img/gator.jpg";
import girls from "./img/girls.jpg";
import stage from "./img/stage.jpg";
import sunset from "./img/sunset.jpg";

function Gallery() {
    
    return(
        
        <div className="gallery">
            <div className="photo-card">
                <img src={snails}/>
                {/* <div className="photo-card__head">Plotting Cat</div> */}
            </div>
            <div className="photo-card">
                <img src={caterpillar}/>
            </div>
            <div className="photo-card">
                <img src={girls}/>
                {/* <div className="photo-card__head">Curious Cat</div> */}
            </div>
            <div className="photo-card">
                <img src={stage}/>
                {/* <div className="photo-card__head">Prowling Cat</div> */}
            </div>
            <div className="photo-card">
                <img src={sunset}/>
                {/* <div className="photo-card__head">Sleepy Cat</div> */}
            </div>
            <div className="photo-card">
                <img src={gator}/>
                {/* <div className="photo-card__head">Sleepy Cat</div> */}
            </div>
            <div className="photo-card">
                <img src={carousel}/>
                {/* <div className="photo-card__head">Sleepy Cat</div> */}
            </div>
        </div>
        
        
        
    )
}

export default Gallery;