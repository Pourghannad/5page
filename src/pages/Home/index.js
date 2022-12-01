import React, { useEffect, useState } from "react";
import classNames from "classnames";
import style from "./style.module.scss";
import { withRouter } from "react-router";
import Intro from "./component/intro"
import { ReactComponent as Play } from "../../assets/play.svg";
import { LSG } from "../../utils/store";
const Home = (props) => {
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
                    </button>
                </div>
            </React.Fragment>
            {levelModal && 
                <div className={style["level-modal"]}>
                    
                </div>
            }
        </div>
    );
};

export default withRouter(Home);