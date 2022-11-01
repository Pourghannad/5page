import React, { useState } from "react";
import style from "./style.module.scss";
import { withRouter } from "react-router";
import Intro from "./component/intro"
import { ReactComponent as Play } from "../../assets/play.svg";
const Home = (props) => {
    const [intro, setIntro] = useState(false);
    setTimeout(() => {
        setIntro(false);
    }, 1200);
    return (
        <div className={style["home-page-container"]}>
            {intro &&
                <Intro />
            }
            {!intro && 
                <React.Fragment>
                    <span className={style["fivepage-logo-type"]}>5Page</span>
                    <div className={style["action-button-container"]}>
                        <button></button>
                        <button onClick={() => props.history.push("/play")}>
                            <Play />
                        </button>
                    </div>
                </React.Fragment>
            }
        </div>
    );
};

export default withRouter(Home);