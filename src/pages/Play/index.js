import React, { useEffect, useRef } from 'react';
import style from "./style.module.scss";
import Grid from './component/Grid';
import { data } from './level.js';
const Play = () => {
    const playContainerRef = useRef(null);
    useEffect(() => {
        if (playContainerRef.current) {
            setTimeout(() => {
                playContainerRef.current.scrollLeft = 80;
                setTimeout(() => {
                    playContainerRef.current.scrollLeft = 0;
                }, 350);
            }, 700);
        }
    }, []);
    return (
        <div ref={playContainerRef} className={style["play-main-container"]}>
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