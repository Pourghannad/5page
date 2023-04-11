import React, { useEffect, useRef, useState } from "react";
import { withRouter } from "react-router";
import style from "./style.module.scss";
import Grid from "./component/Grid";
import classNames from "classnames";
import { LSG, LSS } from "../../utils/store";
import useQueryParams from "../../utils/useQueryParams";
import Help from "../../assets/help.mp4";
import StateModal from "./component/StateModal";
import useSound from "use-sound";
import gameOver from "../../assets/game-over.mp3";
import gameSuccess from "../../assets/success.mp3";
const Play = (props) => {
  const playContainerRef = useRef(null);
  const [selected, setSelected] = useState({});
  const [modalStatus, setModalStatus] = useState(!LSG("intro") ? "intro" : "");
  const [intro, setIntro] = useState(false);
  const [levelData, setLevelData] = useState({});
  const { queryParams } = useQueryParams();
  const [playGameOver] = useSound(gameOver);
  const [playGameSuccess] = useSound(gameSuccess);
  useEffect(() => {
    if (playContainerRef.current && modalStatus === "") {
      if (!LSG("level")) {
        setIntro(true);
        setTimeout(() => {
          if (playContainerRef.current) {
            playContainerRef.current.scrollLeft = 300;
            setTimeout(() => {
              playContainerRef.current.scrollLeft = 0;
            }, 350);
          }
        }, 1500);
      }
      setTimeout(() => {
        setIntro(false);
      }, 1700);
    }
  }, [modalStatus]);

  useEffect(() => {
    if (playContainerRef.current) {
      playContainerRef.current.scrollLeft = 0;
    }
  }, [props.location]);

  useEffect(() => {
    if (queryParams.level) {
      fetch(`/5page/level/${queryParams.level}.json`)
        .then((response) => response.json())
        .then((data) => {
          setLevelData(data);
        })
        .catch((err) => {
          alert(err);
          setLevelData({});
          props.history.push(`/level`);
        });
    }
  }, [props.history, queryParams.level]);

  const handleSelected = (uuid, page) => {
    if (selected[page]) {
      if (!selected[page].includes(uuid)) {
        setSelected({ ...selected, [page]: [uuid] });
      } else {
        setSelected({
          ...selected,
          [page]: selected[page].filter((item) => {
            return item !== uuid;
          }),
        });
      }
    } else {
      setSelected({ ...selected, [page]: [uuid] });
    }
  };

  const submitCondition = () => {
    if (
      selected.hasOwnProperty(1) &&
      selected.hasOwnProperty(2) &&
      selected.hasOwnProperty(3) &&
      selected.hasOwnProperty(4) &&
      selected.hasOwnProperty(5) &&
      selected[1].length > 0 &&
      selected[2].length > 0 &&
      selected[3].length > 0 &&
      selected[4].length > 0 &&
      selected[5].length > 0
    ) {
      return true;
    }
    return false;
  };

  const handleSubmit = () => {
    if (submitCondition()) {
      const currentLevel = levelData;
      let levelStorage = [];
      try {
        levelStorage = JSON.parse(LSG("level")) || [];
      } catch (error) {
        levelStorage = [{ number: queryParams.level, count: { correct: 1 } }];
      }
      if (
        selected[1].length === 1 &&
        selected[2].length === 1 &&
        selected[3].length === 1 &&
        selected[4].length === 1 &&
        selected[5].length === 1 &&
        currentLevel["ok"][0] === selected[1][0] &&
        currentLevel["ok"][1] === selected[2][0] &&
        currentLevel["ok"][2] === selected[3][0] &&
        currentLevel["ok"][3] === selected[4][0] &&
        currentLevel["ok"][4] === selected[5][0]
      ) {
        setModalStatus("win");
        playGameSuccess();
        if (
          !levelStorage.find((item) => item.number === queryParams.level * 1)
        ) {
          LSS(
            "level",
            JSON.stringify([
              ...levelStorage,
              { number: queryParams.level * 1, count: { correct: 1 } },
            ])
          );
        } else {
          const currentLevelIndex = levelStorage.findIndex((item) => {
            return item.number === queryParams.level * 1;
          });
          levelStorage[currentLevelIndex].count.correct = 1;
          LSS("level", JSON.stringify(levelStorage));
        }
        if (queryParams.level !== "14") {
          props.history.push(`/play?level=${queryParams.level * 1 + 1}`);
          setSelected({});
          setTimeout(() => {
            setModalStatus("");
          }, 3000);
        }
      } else {
        const currentLevelCount = levelStorage.find(
          (item) => item.number === queryParams.level * 1
        );
        if (!currentLevelCount) {
          LSS(
            "level",
            JSON.stringify([
              ...levelStorage,
              {
                number: queryParams.level * 1,
                count: { wrong: currentLevelCount?.count?.wrong + 1 || 1 },
              },
            ])
          );
        } else {
          if (!currentLevelCount.count.correct) {
            const currentLevelIndex = levelStorage.findIndex((item) => {
              return item.number === queryParams.level * 1;
            });
            levelStorage[currentLevelIndex].count.wrong += 1;
            LSS("level", JSON.stringify(levelStorage));
          }
        }
        setModalStatus("wrong");
        playGameOver();
        setTimeout(() => {
          setModalStatus("");
        }, 2500);
      }
    } else {
      alert("Please select one item on all five pages first.");
    }
  };
  if (queryParams.level) {
    const currentLevel = levelData;
    return (
      <>
        {intro && (
          <div
            className={classNames(style["intro-scroll"], {
              [style["active"]]: intro,
            })}
          >
            scroll horizontally
          </div>
        )}
        <div className={style["play-head"]}>
          <button
            className={style["back"]}
            onClick={() => {
              props.history.push("/level", { from: "play" });
            }}
          ></button>
          <h4>Level {queryParams.level}</h4>
        </div>
        <div
          ref={playContainerRef}
          className={classNames(style["play-main-container"], {
            [style["intro"]]: modalStatus === "intro",
          })}
        >
          <div className={style["page-container"]}>
            <span className={style["text"]}>Pattern detection</span>
            <Grid standard data={currentLevel.standard} />
          </div>
          <div className={style["page-container"]}>
            <span className={style["text"]}>Page 1</span>
            <Grid
              onSelected={(uuid) => handleSelected(uuid, 1)}
              data={currentLevel.page1}
            />
          </div>
          <div className={style["page-container"]}>
            <span className={style["text"]}>Page 2</span>
            <Grid
              onSelected={(uuid) => handleSelected(uuid, 2)}
              data={currentLevel.page2}
            />
          </div>
          <div className={style["page-container"]}>
            <span className={style["text"]}>Page 3</span>
            <Grid
              onSelected={(uuid) => handleSelected(uuid, 3)}
              data={currentLevel.page3}
            />
          </div>
          <div className={style["page-container"]}>
            <span className={style["text"]}>Page 4</span>
            <Grid
              onSelected={(uuid) => handleSelected(uuid, 4)}
              data={currentLevel.page4}
            />
          </div>
          <div className={style["page-container"]}>
            <span className={style["text"]}>Page 5</span>
            <Grid
              onSelected={(uuid) => handleSelected(uuid, 5)}
              data={currentLevel.page5}
            />
          </div>
        </div>
        <div
          className={classNames(style["submit-wrapper"], {
            [style["active"]]: submitCondition(),
          })}
        >
          <button onClick={handleSubmit} className={style["submit"]}>
            Submit
          </button>
        </div>
        {modalStatus === "win" && <StateModal state="win" />}
        {modalStatus === "wrong" && <StateModal state="wrong" />}
        {modalStatus === "intro" && (
          <div className={style["intro-modal"]}>
            <h5>About the game</h5>
            <video style={{ display: "none" }}>
              <source src={Help} type="video/mp4" />
            </video>
            On the standard page, one item is selected from among the available
            boxes due to a special feature compared to the others. Find this
            special feature and select the item that you think has this feature
            on the next 5 pages.
            <a
              href="https://pourghannad.github.io/5page/static/media/help.ca92b90a.mp4"
              rel="noopener noreferrer"
              target="_blank"
            >
              Video
            </a>
            <button
              onClick={() => {
                setModalStatus("");
                LSS("intro", true);
              }}
            >
              OK
            </button>
          </div>
        )}
      </>
    );
  }
  return <></>;
};

export default withRouter(Play);
