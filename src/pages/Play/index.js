import React, { useEffect, useRef, useState } from 'react';
import style from "./style.module.scss";
import Grid from './component/Grid';
import { data } from './level.js';
const Play = () => {
    const playContainerRef = useRef(null);
    const [selected, setSelected] = useState({});
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

    const handleSelected = (uuid, page) => {
        if (selected[page]) {
            if (!selected[page].includes(uuid)) {
                setSelected({...selected, [page]: [...selected[page] ,uuid]});
            } else {
                setSelected({...selected, [page]: selected[page].filter((item) => {
                    return item !== uuid
                })});
            }
        } else {
            setSelected({...selected, [page]: [uuid]});
        }
    };

    const submitCondition = () => {
        if (
            selected.hasOwnProperty(1) &&
            selected.hasOwnProperty(2) &&
            selected.hasOwnProperty(3) &&
            selected.hasOwnProperty(4) &&
            selected.hasOwnProperty(5) &&
            selected[1].length > 0 &&
            selected[2].length > 0 &&
            selected[3].length > 0 &&
            selected[4].length > 0 &&
            selected[5].length > 0
            ) {
                return true
            }
            return false
    }

    return (
        <>
            <div ref={playContainerRef} className={style["play-main-container"]}>
                <div className={style["page-container"]}>
                    <span className={style["text"]}>Standard</span>
                    <Grid standard data={data["1"].standard} />
                </div>
                <div className={style["page-container"]}>
                    <span className={style["text"]}>Page 1</span>
                    <Grid onSelected={(uuid) => handleSelected(uuid, 1)} data={data["1"].page1} />
                </div>
                <div className={style["page-container"]}>
                    <span className={style["text"]}>Page 2</span>
                    <Grid onSelected={(uuid) => handleSelected(uuid, 2)} data={data["1"].page2} />
                </div>
                <div className={style["page-container"]}>
                    <span className={style["text"]}>Page 3</span>
                    <Grid onSelected={(uuid) => handleSelected(uuid, 3)} data={data["1"].page3} />
                </div>
                <div className={style["page-container"]}>
                    <span className={style["text"]}>Page 4</span>
                    <Grid onSelected={(uuid) => handleSelected(uuid, 4)} data={data["1"].page5} />
                </div>
                <div className={style["page-container"]}>
                    <span className={style["text"]}>Page 5</span>
                    <Grid onSelected={(uuid) => handleSelected(uuid, 5)} data={data["1"].page5} />
                </div>
            </div>
            {submitCondition() &&
                <button className={style["submit"]}>Submit</button>
            }
        </>
    );
};

export default Play;