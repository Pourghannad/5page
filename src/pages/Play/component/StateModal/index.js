import React from "react";
import style from "./style.module.scss";
import { ReactComponent as CheckedSvg } from "../../../../assets/checked.svg";
import { ReactComponent as WrongSvg } from "../../../../assets/wrong.svg";
import classNames from "classnames";
const StateModal = ({ state = "wrong", count = [] }) => (
  <>
    {state === "wrong" && (
      <div className={classNames(style["status-modal"], style["wrong"])}>
        <WrongSvg />
        <p>{count?.length}/5 pages have errors</p>
      </div>
    )}
    {state === "win" && (
      <div className={classNames(style["status-modal"], style["check"])}>
        <CheckedSvg />
      </div>
    )}
  </>
);

export default StateModal;
