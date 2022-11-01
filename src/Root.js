import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import style from "./root-style.module.scss";
import "./reset.scss";
import "./fonts.scss";
import Home from "./pages/Home";
import Play from "./pages/Play";
import { InitUser } from './utils/webID';
const Root = () => {
  useEffect(() => {
    InitUser();
  }, [])
  return (
    <Router>
      <main className={style["main-container"]}>
        <section className={style["wrapper"]}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/play">
              <Play />
            </Route>
          </Switch>
          <div className={style["ads-container"]}>
            <span>ADS</span>
          </div>
        </section>
        </main>
    </Router>
  );
}

export default Root;
