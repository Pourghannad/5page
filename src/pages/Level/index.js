import React, { useEffect, useState } from "react";
import classNames from "classnames";
import style from "./style.module.scss";
import { withRouter } from "react-router";
import { LSG } from "../../utils/store";
import { merge } from "../../utils/lodash";
import { ReactComponent as StartSvg } from "../../assets/star.svg";
import { LevelSelect } from "src/utils/levelSelect";

const Level = (props) => {
  const [active, setActive] = useState(false);
  const [level, setLevel] = useState(LevelSelect);

  useEffect(() => {
    let levelObject = [];
    try {
      levelObject = JSON.parse(LSG("level")) || [];
    } catch (error) {
      levelObject = [];
    }
    if (Object.keys(levelObject).length > 0) {
      const sortedLevels =
      merge(level, levelObject, "number").sort((a, b) => {
        if (a.number < b.number) return -1;
        return 1;
      }) || level;
      if (JSON.stringify(level) !== JSON.stringify(sortedLevels)) {
        setLevel(sortedLevels);
      }
    }
  }, [level]);

  useEffect(() => {
    setTimeout(() => {
      setActive(true);
    }, 100);
  }, [])

  return (
    <div
      className={classNames(style["level-modal"], { [style["active"]]: active })}
    >
      <header>
        <h6>LEVEL SELECT</h6>
        <button
            className={style["back"]}
            onClick={() => {
              props.history.push("/", { from: "level" });
            }}
          ></button>
      </header>
      <div>
        {level.map((item) => (
          <span
            key={`level-${item.number}`}
            onClick={() => item?.soon ? null : props.history.push(`/play?level=${item.number}`)}
            className={classNames({[style["soon"]]: item?.soon})}
          >
            {(item.count.wrong || item.count.correct) ?
              <div className={classNames(style["star-wrapper"], {
                [style["three-star"]]: !item.count?.wrong && item.count.correct,
                [style["two-star"]]: item.count?.wrong && item.count?.wrong < 2  && item.count.correct,
                [style["one-star"]]: item.count?.wrong && item.count?.wrong >= 2  && item.count.correct
              })}>
                <StartSvg /><StartSvg /><StartSvg />
              </div>
            : <></>}
            {item.number}
          </span>
        ))}
      </div>
    </div>
  );
};

export default withRouter(Level);
