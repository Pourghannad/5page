import React from 'react';
import style from "./style.module.scss";
import { ReactComponent as AzardLogo } from "../../../../assets/azard.svg";
const Intro = () => {
    return (
        <div className={style["intro-container"]}>
        <span className={style["azard-logo"]}>
            <AzardLogo />
        </span>
    </div>
    );
};

export default Intro;