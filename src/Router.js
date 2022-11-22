import React from 'react';
import { Switch, Route } from "react-router-dom";
import { withRouter } from "react-router";
import Home from "./pages/Home";
import Play from "./pages/Play";

const RouterSwitch = () => {
    return (
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/play" component={Play} />
      </Switch>
    );
}

export default withRouter(RouterSwitch);