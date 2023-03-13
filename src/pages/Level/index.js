import React, { useEffect, useState } from "react";
import classNames from "classnames";
import style from "./style.module.scss";
import { withRouter } from "react-router";
import { ReactComponent as CheckSmallSvg } from "../../assets/check-small.svg";
import { ReactComponent as WrongSvg } from "../../assets/wrong.svg";
import { LSG } from "../../utils/store";
import { merge } from "../../utils/lodash";

const Level = (props) => {
  const [level, setLevel] = useState([
    {
      number: 1,
      count: {
        correct: 0,
        wrong: 0
      },
    },
    {
      number: 2,
      count: {
        correct: 0,
        wrong: 0
      }
    },
    {
      number: 3,
      count: {
        correct: 0,
        wrong: 0
      }
    },
    {
      number: 4,
      count: {
        correct: 0,
        wrong: 0
      }
    },
    {
      number: 5,
      count: {
        correct: 0,
        wrong: 0
      }
    },
    {
      number: 6,
      count: {
        correct: 0,
        wrong: 0
      }
    },
    {
      number: 7,
      count: {
        correct: 0,
        wrong: 0
      }
    },
    {
      number: 8,
      count: {
        correct: 0,
        wrong: 0
      }
    },
    {
      number: 9,
      count: {
        correct: 0,
        wrong: 0
      }
    },
    {
      number: 10,
      count: {
        correct: 0,
        wrong: 0
      }
    },
    {
      number: 11,
      count: {
        correct: 0,
        wrong: 0
      }
    },
    {
      number: 12,
      count: {
        correct: 0,
        wrong: 0
      },
      soon: true
    },
  ]);

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

  return (
    <div
      className={classNames(style["level-modal"], { [style["active"]]: true })}
    >
      <h6>LEVEL SELECT</h6>
      <div>
        {level.map((item) => (
          <span
            key={`level-${item.number}`}
            onClick={() => props.history.push(`/play?level=${item.number}`)}
            className={classNames({[style["soon"]]: item?.soon})}
          >
            {item.count.correct === 1 && (
              <span className={style["check"]}>
                <CheckSmallSvg />
              </span>
            )}
            {item.count.wrong > 0 && (
              <span className={style["wrong-wrapper"]}>
                <span className={style["wrong"]}><WrongSvg /><span>{item.count.wrong}</span></span> 
              </span>
            )}
            {item.number}
          </span>
        ))}
      </div>
    </div>
  );
};

export default withRouter(Level);
