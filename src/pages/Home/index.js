import React, { useEffect, useState } from "react";
import classNames from "classnames";
import style from "./style.module.scss";
import Intro from "./component/intro"
import { ReactComponent as Play } from "../../assets/play.svg";
import { ReactComponent as About } from "../../assets/about.svg";
import { LSG } from "../../utils/store";
import { withRouter } from "react-router-dom";
const Home = (props) => {
    const [intro, setIntro] = useState(!LSG('intro'));
    const isLevel = LSG("level");
    useEffect(() => {
        setTimeout(() => {
            setIntro(false);
        }, 1200);
    }, []);
    return (
        <div className={style["home-page-container"]}>
            <div className={classNames(style["intro-wrapper"], {[style["deactive-intro"]]: !intro})}>
                <Intro />
            </div>
            <React.Fragment>
                <span className={style["fivepage-logo-type"]}>5Page</span>
                <div className={style["action-button-container"]}>
                    <button aria-label="About" onClick={() => props.history.push('/about')}>
                        <About />
                    </button>
                    <button aria-label="Play" onClick={() => isLevel ? props.history.push('/level') : props.history.push('/play?level=1')}>
                        <Play />
                        <span>5</span>
                        <span>5</span>
                        <span>5</span>
                        <span>5</span>
                        <span>5</span>
                    </button>
                </div>
            </React.Fragment>
        </div>
    );
};

export default withRouter(Home);