import React, { useEffect, useRef, useState } from "react";
import { withRouter } from "react-router";
import style from "./style.module.scss";
import Grid from "./component/Grid";
import classNames from "classnames";
import { LSG, LSS } from "../../utils/store";
import useQueryParams from "../../utils/useQueryParams";
import StateModal from "./component/StateModal";
import useSound from "use-sound";
import gameOver from "../../assets/game-over.mp3";
import gameSuccess from "../../assets/success.mp3";

const TOTAL_PAGES = 5;
const MAX_LEVEL = 19;
const PAGE_KEYS = Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1);

const Play = (props) => {
  const playContainerRef = useRef(null);
  const [selected, setSelected] = useState({});
  const [modalStatus, setModalStatus] = useState(!LSG("intro") ? "intro" : "");
  const [intro, setIntro] = useState(false);
  const [errorsCount, setErrorsCount] = useState([]);
  const [levelData, setLevelData] = useState({});
  const [finish, setFinish] = useState(false);
  
  const { queryParams } = useQueryParams();
  const [playGameOver] = useSound(gameOver);
  const [playGameSuccess] = useSound(gameSuccess);

  useEffect(() => {
    if (playContainerRef?.current && modalStatus === "") {
      if (!LSG("level")) {
        setIntro(true);
        const timer = setTimeout(() => setIntro(false), 1700);
        return () => clearTimeout(timer); 
      }
    }
  }, [modalStatus]);

  useEffect(() => {
    if (playContainerRef.current) {
      playContainerRef.current.scrollLeft = 0;
    }
  }, [props.location]);

  useEffect(() => {
    if (queryParams.level) {
      setLevelData({});
      fetch(`/5page/level/${queryParams.level}.json`)
        .then((response) => response.json())
        .then((data) => setLevelData(data))
        .catch((err) => {
          alert(err);
          setLevelData({});
          props.history.push(`/level`);
        });
    }
  }, [props.history, queryParams.level]);

  const handleSelected = (uuid, page) => {
    setSelected((prev) => {
      const currentSelections = prev[page] || [];
      const isSelected = currentSelections.includes(uuid);
      
      return {
        ...prev,
        [page]: isSelected ? [] : [uuid], 
      };
    });
  };

  const submitCondition = () => {
    return PAGE_KEYS.every((page) => selected[page]?.length > 0);
  };

  const updateLevelProgress = (levelNum, isCorrect) => {
    let levelStorage = [];
    try {
      levelStorage = JSON.parse(LSG("level")) || [];
    } catch (error) {
      levelStorage = [];
    }

    const levelIndex = levelStorage.findIndex((item) => item.number === levelNum);
    
    if (levelIndex === -1) {
      levelStorage.push({
        number: levelNum,
        count: isCorrect ? { correct: 1 } : { wrong: 1 },
      });
    } else {
      if (isCorrect) {
        levelStorage[levelIndex].count.correct = 1;
      } else if (!levelStorage[levelIndex].count.correct) {
        levelStorage[levelIndex].count.wrong = (levelStorage[levelIndex].count.wrong || 0) + 1;
      }
    }
    
    LSS("level", JSON.stringify(levelStorage));
  };

  const checkAnswers = (currentLevel) => {
    const isCorrect = PAGE_KEYS.every(
      (page) => selected[page][0] === currentLevel.ok[page - 1]
    );
    
    if (isCorrect) return { isCorrect: true, errors: [] };
    
    const errors = PAGE_KEYS.filter(
      (page) => selected[page][0] !== currentLevel.ok[page - 1]
    );
    
    return { isCorrect: false, errors };
  };

  const handleSubmit = () => {
    if (!submitCondition()) {
      alert("Please select one item on all five pages first.");
      return;
    }

    const currentLevelNum = Number(queryParams.level);
    const { isCorrect, errors } = checkAnswers(levelData);

    updateLevelProgress(currentLevelNum, isCorrect);

    if (isCorrect) {
      setModalStatus("win");
      playGameSuccess();
      
      if (currentLevelNum < MAX_LEVEL) {
        props.history.push(`/play?level=${currentLevelNum + 1}`);
        setSelected({});
        setTimeout(() => setModalStatus(""), 3000);
      } else {
        setFinish(true);
      }
    } else {
      setErrorsCount(errors);
      setModalStatus("wrong");
      playGameOver();
      setTimeout(() => setModalStatus(""), 2500);
    }
  };

  if (!queryParams.level) return null;

  const currentLevel = levelData;
  const isIntroModal = modalStatus === "intro";

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
          onClick={() => props.history.push("/level", { from: "play" })}
          aria-label="Back to levels"
        />
        <h4>Level {queryParams.level}</h4>
      </div>

      <div
        ref={playContainerRef}
        className={classNames(style["play-main-container"], {
          [style["intro"]]: isIntroModal,
        })}
      >
        <div className={style["page-container"]}>
          <span className={style["text"]}>Page 0</span>
          <Grid standard data={currentLevel.standard} />
        </div>

        {PAGE_KEYS.map((page) => (
          <div key={page} className={style["page-container"]}>
            <span className={style["text"]}>Page {page}</span>
            <Grid
              onSelected={(uuid) => handleSelected(uuid, page)}
              data={currentLevel[`page${page}`]}
            />
          </div>
        ))}
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

      {finish && (
        <div className="pyro">
          <div className="before" />
          <div className="after" />
        </div>
      )}

      {modalStatus === "win" && <StateModal state="win" />}
      {modalStatus === "wrong" && (
        <StateModal state="wrong" count={errorsCount} />
      )}
      
      {isIntroModal && (
        <div className={style["intro-modal"]}>
          <h5>About the game</h5>
          <p>
            On the page 0, one box is selected because it contains a unique feature that sets it apart from the others. Identify this feature, then on each of the next five pages, choose the box that contains the same feature.
          </p>
          <a
            href="https://90theme.ir/upload/help.mp4"
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
};

export default withRouter(Play);