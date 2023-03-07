import React, { useEffect, useState } from "react";
import classNames from "classnames";
import style from "./style.module.scss";
import { withRouter } from "react-router";
import { LSG } from "../../utils/store";

const Level = (props) => {
  const [level, setLevel] = useState([
    {
      number: 1,
      count: 0,
    },
    {
      number: 2,
      count: 0,
    },
    {
      number: 3,
      count: 0,
    },
    {
      number: 4,
      count: 0,
    },
    {
      number: 5,
      count: 0,
    },
    {
      number: 6,
      count: 0,
    },
    {
      number: 7,
      count: 0,
    },
    {
      number: 8,
      count: 0,
    },
    {
      number: 9,
      count: 0,
    },
    {
      number: 10,
      count: 0,
    },
    {
      number: 11,
      count: 0,
    },
  ]);
  useEffect(() => {
    let levelObject = {};
    try {
      levelObject = JSON.parse(LSG("level"));
    } catch (error) {
      levelObject = {};
    }
    if (Object.keys(levelObject).length > 0) {
    }
  }, []);
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
          >
            {item.number}
          </span>
        ))}
      </div>
    </div>
  );
};

export default withRouter(Level);
