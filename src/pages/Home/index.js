import React, { useEffect, useState } from "react";
import classNames from "classnames";
import style from "./style.module.scss";
import Intro from "./component/intro"
import { ReactComponent as Play } from "../../assets/play.svg";
import { LSG } from "../../utils/store";
import LevelSelect from "./component/LevelSelect";
const Home = () => {
    const [intro, setIntro] = useState(!LSG('intro'));
    const [levelModal, setLevelModal] = useState(false);
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
                    <button onClick={() => setLevelModal(true)}>
                        <Play />
                        <span>5</span>
                        <span>5</span>
                        <span>5</span>
                        <span>5</span>
                        <span>5</span>
                    </button>
                </div>
            </React.Fragment>
            <LevelSelect state={levelModal} />
        </div>
    );
};

export default Home;