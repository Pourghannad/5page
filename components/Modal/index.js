import React from 'react';
import style from "./style.module.scss";
import FIconClose from "../../assets/close.svg";
const Modal = (props) => {
    const onCloseHandleClick = () => {
        props.onClose();
    }
    return (
        <div className={style["modal-container"]}>
            <div className={style["close"]} onClick={onCloseHandleClick}>
                <FIconClose />
            </div>
            <div className={style["wrapper"]}>
                {props.children}
            </div>
        </div>
    );
};

export default Modal;