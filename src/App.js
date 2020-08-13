import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import { history } from "./history";
import NotFound from "./pages/404";
import Home from "./pages/home/index";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
