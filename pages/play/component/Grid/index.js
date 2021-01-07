import React from 'react';
import style from "./style.module.scss";
import classnames from "classnames";
import { cloneObject } from '../../../../utils/lodash';
const Grid = (props) => {
    const itemHandleClick = (param) => {
        console.log("A", param);
    }
    return (
        <div className={style["grid-container"]}>
            <div className={style["items-container"]}>
                {props.data.grid.map((item, key) => {
                    const itemCss = cloneObject(item.css);
                    const defaultCss = cloneObject(props.data.defaultItem);
                    return (
                        <div key={key} onClick={() => !(props.data.hasOwnProperty("standard") && props.data.standard) && itemHandleClick(item)} className={classnames(style["item"], {[style["active"]]: item.active})}>
                            <span style={Object.assign(defaultCss, itemCss)}></span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Grid;