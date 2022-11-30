import React, { useEffect } from 'react';
import { HashRouter } from 'react-router-dom'
import style from "./root-style.module.scss";
import "./reset.scss";
import "./fonts.scss";
import { InitUser } from './utils/webID';
import RouterSwitch from './Router';
const Root = () => {
  useEffect(() => {
    InitUser();
  }, [])
  return (
    <HashRouter>
      <main className={style["main-container"]}>
        <section className={style["wrapper"]}>
          <RouterSwitch />
          {/* <div className={style["ads-container"]}>
            <span>ADS</span>
          </div> */}
        </section>
        </main>
    </HashRouter>
  );
}

export default Root;
