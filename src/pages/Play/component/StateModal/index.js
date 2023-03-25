import React from "react";
import style from "./style.module.scss";
import { ReactComponent as CheckedSvg } from "../../../../assets/checked.svg";
import { ReactComponent as WrongSvg } from "../../../../assets/wrong.svg";
import classNames from "classnames";
const StateModal = ({ state = "wrong" }) => (
  <>
    {state === "wrong" && (
      <div className={classNames(style["status-modal"], style["wrong"])}>
        <WrongSvg />
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
