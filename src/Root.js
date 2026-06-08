import React, { Suspense, useEffect, useState } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import style from "./root-style.module.scss";
import Loading from "./components/loading";
import "./reset.scss";
import "./fonts.scss";
import "./firework.css";

const Home = React.lazy(() => import("./pages/Home"));
const Level = React.lazy(() => import("./pages/Level"));
const Play = React.lazy(() => import("./pages/Play"));
const About = React.lazy(() => import("./pages/About"));
const Editor = React.lazy(() => import("./pages/Editor"));

const Root = () => {
  const [loadingFonts, setLoadingFonts] = useState(true);

  useEffect(() => {
    document.fonts.ready.finally(() => setLoadingFonts(false));
  }, []);

  if (loadingFonts) {
    return <Loading />;
  }

  return (
    <HashRouter>
      <main className={style["main-container"]}>
        <section className={style.wrapper}>
          <Suspense fallback={<Loading />}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/level" component={Level} />
              <Route exact path="/play" component={Play} />
              <Route exact path="/about" component={About} />
              <Route exact path="/editor" component={Editor} />
            </Switch>
          </Suspense>
        </section>
      </main>
    </HashRouter>
  );
};

export default Root;