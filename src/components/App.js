import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";
function App() {
  return (
    <div>
      {
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/movies" component={Movies} />
            <Route path="/directors" component={Directors} />
            <Route path="/actors" component={Actors} />
          </Switch>
        </Router>
      }
    </div>
  );
}

export default App;
