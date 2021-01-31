import React from "react";
import "./style.css";

function Jumbotron() {
    return (
        <div>
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4">Fluid jumbotron</h1>
                    <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                </div>
            </div>
        </div>
    )
}

export default Jumbotron;