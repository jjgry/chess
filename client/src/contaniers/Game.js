import React from "react";
import { useSelector } from "react-redux";
import { selectWhiteIsNext } from "../reducers/gameSlice";
import Board from "../components/Board";
import styles from "./Game.module.css";

const Game = () => {
  const whiteIsNext = useSelector(selectWhiteIsNext);

  const getStatusMessage = () => {
    return whiteIsNext ? "White to move" : "Black to move";
  };

  return (
    <div className="game">
      <Board />
      <div className={styles.gameInfo}>
        <div>{getStatusMessage()}</div>
      </div>
    </div>
  );
};

export default Game;
