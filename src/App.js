
import React from "react"
import ReactDOM from "react-dom"

import { render } from "react-dom";
import SearchParams from "./SearchParams"
import Details from "./Details"
import { StrictMode, useState } from "react";
import ThemeContext from "./ThemeContext";

import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";


const App = () => {
  const theme = useState("darkblue")

return (

  <ThemeContext.Provider value={theme}>
    [<div>
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
]
  
  </ThemeContext.Provider>
)

 
};

ReactDOM.render(<StrictMode>
  <App />
</StrictMode>,
 document.getElementById("root"));
