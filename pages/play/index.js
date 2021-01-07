import React from "react";
import Head from "next/head";
import style from "./style.module.scss";
import Grid from "./component/Grid";
import { data } from "./level.js";
const Play = () => {
    return (
        <div className={style["play-main-container"]}>
        <Head>
          <title>5Page</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
          <meta name="HandheldFriendly" content="true" />
        </Head>
            <div className={style["page-container"]}>
                <span className={style["text"]}>Standard</span>
                <Grid data={data["1"].standard} />
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
                <Grid data={data["1"].page4} />
            </div>
            <div className={style["page-container"]}>
                <span className={style["text"]}>Page 5</span>
                <Grid data={data["1"].page5} />
            </div>
        </div>
    );
};

export default Play;