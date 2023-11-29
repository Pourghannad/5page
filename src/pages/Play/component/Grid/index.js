import React, { useState } from "react";
import style from "./style.module.scss";
import classnames from "classnames";
import { cloneObject } from "src/utils/lodash";
import Loading from "src/components/loading";
const Grid = (props) => {
  const [selected, setSelected] = useState([]);
  const itemHandleClick = (param) => {
    if (!props.standard) {
      if (!selected.includes(param.uuid)) {
        setSelected([param.uuid]);
      } else {
        setSelected(
          selected.filter((item) => {
            return item !== param.uuid;
          })
        );
      }
      props.onSelected(param.uuid);
    }
  };
  return (
    <div
      className={classnames(style["grid-container"], {
        [style["standard"]]: props.standard,
        [style["editor"]]: props.editor,
      })}
    >
      <div className={style["items-container"]}>
        {props.data ? (
          props.data.grid.map((item, index) => {
            const itemCss = cloneObject(item?.css || {});
            const defaultCss = cloneObject(props.data.defaultItem);
            return (
              <div
                key={index}
                onClick={() => itemHandleClick(item)}
                className={classnames(style["item"], {
                  [style["active"]]: item.active,
                  [style["selected"]]: selected.includes(item.uuid),
                })}
              >
                {item.objects && item.objects.length > 0 ? (
                  <div className={style["multi-object-wrapper"]}>
                    {item.objects.map((object, index) => {
                      return (
                        <div key={index} style={cloneObject(object)}></div>
                      );
                    })}
                  </div>
                ) : (
                  <span style={Object.assign(defaultCss, itemCss)}></span>
                )}
              </div>
            );
          })
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default Grid;
