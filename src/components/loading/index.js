import React from "react";
import style from "./style.module.scss";

const Loading = () => (
    <div className={style["loading"]}>
        <div>
            <span>5</span>
            <span>5</span>
            <span>5</span>
            <span>5</span>
            <span>5</span>
        </div>
    </div>
);

export default Loading;