import React, { Suspense, useEffect, useState } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import style from "./root-style.module.scss";
import Loading from "./components/loading";
import "./reset.scss";
import "./fonts.scss";

const Home = React.lazy(() => import("./pages/Home"));
const Level = React.lazy(() => import("./pages/Level"));
const Play = React.lazy(() => import("./pages/Play"));
const About = React.lazy(() => import("./pages/About"));
const Editor = React.lazy(() => import("./pages/Editor"));

const Root = () => {
  const [fontReady, setFontReady] = useState(true);
  useEffect(() => {
    document.fonts.ready
      .then(() => {
        setFontReady(false);
      })
      .catch(() => {
        setFontReady(false);
      });
  }, []);
  return (
    <HashRouter>
      {fontReady ? (
        <Loading />
      ) : (
        <main className={style["main-container"]}>
          <section className={style["wrapper"]}>
            <Switch>
              <Suspense fallback={<Loading />}>
                <Route exact path="/" component={Home} />
                <Route exact path="/level" component={Level} />
                <Route exact path="/play" component={Play} />
                <Route exact path="/about" component={About} />
                <Route exact path="/editor" component={Editor} />
              </Suspense>
            </Switch>
          </section>
        </main>
      )}
    </HashRouter>
  );
};

export default Root;
