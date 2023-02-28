import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import Home from "../views/Home";
import { SuperHeroProvider } from "../context/SuperHeroContext";
import Superhero from "../views/SuperHero";


export default function Routes() {
  return (
    <Router>
        <Route exact path="/bio/:id">
          <SuperHeroProvider>
            <Superhero /> 
          </SuperHeroProvider>
        </Route>
        <Route exact path="/">
          <Home /> 
        </Route>
    </Router>
  );
}