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
                        <span>5</span>
                        <span>5</span>
                        <span>5</span>
                        <span>5</span>
                        <span>5</span>
                        <span>5</span>
                        <span>5</span>
                        <span>5</span>
                        <span>5</span>
                        <span>5</span>
                        <span>5</span>
                        <span>5</span>
                    </button>
                </div>
            </React.Fragment>
            {levelModal && 
                <div className={style["level-modal"]}>
                    <h6>LEVEL SELECT</h6>
                    <div>
                        <span onClick={() => props.history.push("/play?level=1")}>1</span>
                        <span onClick={() => props.history.push("/play?level=2")}>2</span>
                        <span onClick={() => props.history.push("/play?level=3")}>3</span>
                        <span onClick={() => props.history.push("/play?level=4")}>4</span>
                        <span onClick={() => props.history.push("/play?level=5")}>5</span>
                        <span onClick={() => props.history.push("/play?level=6")}>6</span>
                        <span onClick={() => props.history.push("/play?level=7")}>7</span>
                        <span onClick={() => props.history.push("/play?level=8")}>8</span>
                        <span onClick={() => props.history.push("/play?level=9")}>9</span>
                        <span onClick={() => props.history.push("/play?level=10")}>10</span>
                    </div>
                </div>
            }
        </div>
    );
};

export default withRouter(Home);