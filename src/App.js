
import React from "react"
import ReactDOM from "react-dom"

import { render } from "react-dom";
import SearchParams from "./SearchParams"
import Details from "./Details"
import { StrictMode } from "react";

import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";

const App = () => {
return (
  <div>
  <Router>
    <header>
  <Link to="/">Adopt Me!</Link>
    </header>;
    <Switch>
      <Route path="/details/:id">
        <Details />
      </Route>
      <Route path ="/">
        <SearchParams />;
      </Route>
    </Switch>
  </Router>
   
  </div>
)

 
};

ReactDOM.render(<StrictMode>
  <App />
</StrictMode>,
 document.getElementById("root"));
