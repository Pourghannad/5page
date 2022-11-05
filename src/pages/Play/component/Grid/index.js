import React, { useState } from 'react';
import style from "./style.module.scss";
import classnames from "classnames";
import { cloneObject } from '../../../../utils/lodash';
const Grid = (props) => {
    const [selected, setSelected] = useState([]);
    const itemHandleClick = (param) => {
        if (!props.standard)  {
            if (!selected.includes(param.uuid)) {
                setSelected([...selected, param.uuid])
            }
        }
    }
    return (
        <div className={style["grid-container"]}>
            <div className={style["items-container"]}>
                {props.data.grid.map((item, key) => {
                    const itemCss = cloneObject(item.css);
                    const defaultCss = cloneObject(props.data.defaultItem);
                    return (
                        <div key={key} onClick={() => itemHandleClick(item)} className={classnames(style["item"], {[style["active"]]: item.active, [style["selected"]]: selected.includes(item.uuid)})}>
                            <span style={Object.assign(defaultCss, itemCss)}></span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Grid;