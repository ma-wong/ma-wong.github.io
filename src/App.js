import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Nav from "./components/Nav";
import "./style.css";
import Photography from "./pages/Photography";
import Home from "./pages/Home";

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee, faDatabase, faExternalLinkAlt, faImages, faPaintBrush, faServer} from '@fortawesome/free-solid-svg-icons';


library.add(fab, faCheckSquare, faCoffee, faDatabase, faImages, faPaintBrush, faServer, faExternalLinkAlt)

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/photography" component={Photography} />
        </Switch>
      </div>
    </Router>
    
    
  );
}

export default App;
