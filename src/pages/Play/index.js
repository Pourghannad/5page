import React, { useEffect, useRef, useState } from 'react';
import style from "./style.module.scss";
import Grid from './component/Grid';
import { ReactComponent as CheckedSvg } from "../../assets/checked.svg";
import { ReactComponent as WrongSvg } from "../../assets/wrong.svg";
import { data } from './level.js';
import classNames from 'classnames';
import { LSG, LSS } from '../../utils/store';
const Play = () => {
    const playContainerRef = useRef(null);
    const [selected, setSelected] = useState({});
    const [modalStatus, setModalStatus] = useState(!LSG('intro') ? 'intro' : '');
    useEffect(() => {
        if (playContainerRef.current && modalStatus === '' && LSG('intro')) {
            setTimeout(() => {
                playContainerRef.current.scrollLeft = 150;
                setTimeout(() => {
                    playContainerRef.current.scrollLeft = 0;
                }, 250);
            }, 250);
        }
    }, [modalStatus]);

    const handleSelected = (uuid, page) => {
        if (selected[page]) {
            if (!selected[page].includes(uuid)) {
                setSelected({...selected, [page]: [uuid]});
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

    const handleSubmit = () => {
        if (
            selected[1].length === 1 &&
            selected[2].length === 1 &&
            selected[3].length === 1 &&
            selected[4].length === 1 &&
            selected[5].length === 1 && 
            data["1"]["ok"][0] === selected[1][0] && 
            data["1"]["ok"][1] === selected[2][0] && 
            data["1"]["ok"][2] === selected[3][0] && 
            data["1"]["ok"][3] === selected[4][0] && 
            data["1"]["ok"][4] === selected[5][0]
            ) {
                setModalStatus('win');
            } else {
                setModalStatus('wrong');
                setTimeout(() => {
                    setModalStatus('');
                    setSelected({});
                }, 3000);
            }
    }

    return (
        <>
            <div ref={playContainerRef} className={classNames(style["play-main-container"], {[style["intro"]]: modalStatus === 'intro'})}>
                <div className={style["page-container"]}>
                    <span className={style["text"]}>Standard</span>
                    <Grid standard data={data["1"].standard} />
                </div>
                {console.log('fooo', selected)}
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
                    <Grid onSelected={(uuid) => handleSelected(uuid, 4)} data={data["1"].page4} />
                </div>
                <div className={style["page-container"]}>
                    <span className={style["text"]}>Page 5</span>
                    <Grid onSelected={(uuid) => handleSelected(uuid, 5)} data={data["1"].page5} />
                </div>
            </div>
            {submitCondition() &&
                <button onClick={handleSubmit} className={style["submit"]}>Submit</button>
            }
            {modalStatus === 'win' && 
                <div className={style["status-modal"]}><CheckedSvg /></div>
            }
            {modalStatus === 'wrong' && 
                <div className={classNames(style["status-modal"], style["wrong"])}><WrongSvg /></div>
            }
            {modalStatus === 'intro' && 
                <div className={style["intro-modal"]}>
                    <h5>About the game</h5>
                    On the standard page, one item is selected from among the available boxes due to a special feature compared to the others. Find this special feature and select the item that you think has this feature on the next 5 pages.
                    <button onClick={() => {
                        setModalStatus('');
                        LSS('intro', true);
                    }}>OK</button>
                </div>
            }
        </>
    );
};

export default Play;