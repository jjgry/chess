import React from "react";
import { useSelector } from "react-redux";
import Board from "../components/Board";

const Game = () => {
  const whiteIsNext = useSelector((state) => state.game.whiteIsNext);

  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div>{whiteIsNext ? "White to move" : "Black to move"}</div>
      </div>
    </div>
  );
};

export default Game;
