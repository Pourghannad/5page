import React from 'react';
import style from "./style.module.scss";
import Grid from './component/Grid';
import { data } from './level.js';
const Play = () => {
    return (
        <div className={style["play-main-container"]}>
            <div className={style["page-container"]}>
                <span className={style["text"]}>Standard</span>
                <Grid data={data["1"].standard} />
            </div>
            <div className={style["page-container"]}>
                <span className={style["text"]}>Page 1</span>
                <Grid data={data["1"].page1} />
            </div>
        </div>
    );
};

export default Play;