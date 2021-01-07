import React, { useState } from "react";
import { useRouter } from 'next/router'
import Head from "next/head";
import style from "./style.module.scss";
import Intro from "./component/intro"
import FIconPlay from "../../assets/play.svg";
import FIconMore from "../../assets/more.svg";
import Modal from "../../components/Modal";

const Index = () => {
    const [intro, setIntro] = useState(false);
    const [playModeState, setPlayModeState] = useState(false);
    const router = useRouter();
    setTimeout(() => {
        setIntro(false);
    }, 1200);
    const playHandleClick = (e) => {
      e.preventDefault();
      setPlayModeState(true);
    }
    const onClosePlayModeModal = () => {
      setPlayModeState(false);
    }
    return (
      <div className={style["home-page-container"]}>
        <Head>
          <title>5Page</title>
        </Head>
        {intro &&
          <Intro />
        }
        {!intro && 
            <React.Fragment>
                <span className={style["fivepage-logo-type"]}>5Page</span>
                <div className={style["action-button-container"]}>
                    <button className={style["more"]}>
                      <FIconMore />
                    </button>
                    <button className={style["play"]} onClick={playHandleClick}>
                        <FIconPlay />
                    </button>
                </div>
            </React.Fragment>
        }
        {playModeState &&
          <Modal onClose={onClosePlayModeModal}>
            <div className={style["play-mode-container"]}>
              <button>Play as a Guest</button>
              <button onClick={() => router.push("/play")}>Continue Level <b>2</b> as a <b>Hasan</b></button>
            </div>
          </Modal>
        }
      </div>
    );
}
export default Index;