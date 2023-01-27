import React, { useEffect, useRef, useState } from 'react';
import { withRouter } from "react-router";
import style from "./style.module.scss";
import Grid from './component/Grid';
import { ReactComponent as CheckedSvg } from "../../assets/checked.svg";
import { ReactComponent as WrongSvg } from "../../assets/wrong.svg";
import classNames from 'classnames';
import { LSG, LSS } from '../../utils/store';
import useQueryParams from '../../utils/useQueryParams';
import Help from "../../assets/help.mp4";
const Play = (props) => {
    const playContainerRef = useRef(null);
    const [selected, setSelected] = useState({});
    const [modalStatus, setModalStatus] = useState(!LSG('intro') ? 'intro' : '');
    const [intro, setIntro] = useState(false);
    const { queryParams } = useQueryParams();
    useEffect(() => {
        if (playContainerRef.current && modalStatus === '') {
            setIntro(true);
            setTimeout(() => {
                setIntro(false);
            }, 1500);
        }
    }, [modalStatus]);

    useEffect(() => {
        if (playContainerRef.current) {
            playContainerRef.current.scrollLeft = 0;
        }
    }, [props.location]);

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
        const currentLevel = require(`./level/${queryParams.level}.json`);
        if (
            selected[1].length === 1 &&
            selected[2].length === 1 &&
            selected[3].length === 1 &&
            selected[4].length === 1 &&
            selected[5].length === 1 && 
            currentLevel["ok"][0] === selected[1][0] && 
            currentLevel["ok"][1] === selected[2][0] && 
            currentLevel["ok"][2] === selected[3][0] && 
            currentLevel["ok"][3] === selected[4][0] && 
            currentLevel["ok"][4] === selected[5][0]
            ) {
                setModalStatus('win');
                if (queryParams.level !== "9") {
                    props.history.push(`/play?level=${(queryParams.level*1) +1}`)
                    setSelected({});
                    setTimeout(() => {
                        setModalStatus('');
                    }, 2000);
                }
            } else {
                setModalStatus('wrong');
                setTimeout(() => {
                    setModalStatus('');
                }, 3000);
            }
    }
    if (queryParams.level) {
        const currentLevel = require(`./level/${queryParams.level}.json`);
        return (
            <>
            <button className={style["back"]} onClick={() => {
                props.history.push('/', {from: "play"})
            }}></button>
            <div className={classNames(style["intro-scroll"], {[style["active"]] : intro})}>scroll horizontally</div>
            <h4>Level {queryParams.level}</h4>
                <div ref={playContainerRef} className={classNames(style["play-main-container"], {[style["intro"]]: modalStatus === 'intro'})}>
                    <div className={style["page-container"]}>
                        <span className={style["text"]}>Standard</span>
                        <Grid standard data={currentLevel.standard} />
                    </div>
                    <div className={style["page-container"]}>
                        <span className={style["text"]}>Page 1</span>
                        <Grid onSelected={(uuid) => handleSelected(uuid, 1)} data={currentLevel.page1} />
                    </div>
                    <div className={style["page-container"]}>
                        <span className={style["text"]}>Page 2</span>
                        <Grid onSelected={(uuid) => handleSelected(uuid, 2)} data={currentLevel.page2} />
                    </div>
                    <div className={style["page-container"]}>
                        <span className={style["text"]}>Page 3</span>
                        <Grid onSelected={(uuid) => handleSelected(uuid, 3)} data={currentLevel.page3} />
                    </div>
                    <div className={style["page-container"]}>
                        <span className={style["text"]}>Page 4</span>
                        <Grid onSelected={(uuid) => handleSelected(uuid, 4)} data={currentLevel.page4} />
                    </div>
                    <div className={style["page-container"]}>
                        <span className={style["text"]}>Page 5</span>
                        <Grid onSelected={(uuid) => handleSelected(uuid, 5)} data={currentLevel.page5} />
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
                        <video style={{display : 'none'}}>
                            <source src={Help} type="video/mp4" />
                        </video>
                        On the standard page, one item is selected from among the available boxes due to a special feature compared to the others. Find this special feature and select the item that you think has this feature on the next 5 pages.
                        <a 
                            href='https://pourghannad.github.io/5page/static/media/help.ca92b90a.mp4'
                            rel='noopener noreferrer'
                            target='_blank'
                        >
                            Video
                        </a>
                        <button onClick={() => {
                            setModalStatus('');
                            LSS('intro', true);
                        }}>OK</button>
                    </div>
                }
            </>
        );

    }
    return <></>
};

export default withRouter(Play);