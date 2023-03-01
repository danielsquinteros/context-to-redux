import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import Home from "../views/Home";
import Superhero from "../views/SuperHero";


export default function Routes() {
  return (
    <Router>
        <Route exact path="/bio/:id">
            <Superhero /> 
        </Route>
        <Route exact path="/">
          <Home /> 
        </Route>
    </Router>
  );
}