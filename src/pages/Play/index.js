import React, { useEffect, useRef } from 'react';
import style from "./style.module.scss";
import Grid from './component/Grid';
import { data } from './level.js';
const Play = () => {
    const playContainerRef = useRef(null);
    useEffect(() => {
        if (playContainerRef.current) {
            setTimeout(() => {
                playContainerRef.current.scrollLeft = 140;
                setTimeout(() => {
                    playContainerRef.current.scrollLeft = 0;
                }, 350);
            }, 500);
        }
    }, []);
    return (
        <div ref={playContainerRef} className={style["play-main-container"]}>
            <div className={style["page-container"]}>
                <span className={style["text"]}>Standard</span>
                <Grid standard data={data["1"].standard} />
            </div>
            <div className={style["page-container"]}>
                <span className={style["text"]}>Page 1</span>
                <Grid data={data["1"].page1} />
            </div>
            <div className={style["page-container"]}>
                <span className={style["text"]}>Page 2</span>
                <Grid data={data["1"].page2} />
            </div>
            <div className={style["page-container"]}>
                <span className={style["text"]}>Page 3</span>
                <Grid data={data["1"].page3} />
            </div>
            <div className={style["page-container"]}>
                <span className={style["text"]}>Page 4</span>
                <Grid data={data["1"].page5} />
            </div>
            <div className={style["page-container"]}>
                <span className={style["text"]}>Page 5</span>
                <Grid data={data["1"].page5} />
            </div>
        </div>
    );
};

export default Play;