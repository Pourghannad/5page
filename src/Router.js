import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Play from "./pages/Play";

const RouterSwitch = () => {
    return (
        <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/play">
          <Play />
        </Route>
      </Switch>
    );
}

export default RouterSwitch;