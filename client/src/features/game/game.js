import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleClick } from "./gameSlice";
import { Board } from "../../components/Board";

export function Game() {
  const tiles = useSelector((state) => state.game.tiles);
  const selected = useSelector((state) => state.game.selected);
  const whiteIsNext = useSelector((state) => state.game.whiteIsNext);
  const dispatch = useDispatch();

  return (
    <div className="game">
      <div className="game-board">
        <Board
          tiles={tiles}
          selected={selected}
          onClick={(row, col) => dispatch(handleClick({ row: row, col: col }))}
        />
      </div>
      <div className="game-info">
        <div>{whiteIsNext ? "White to move" : "Black to move"}</div>
      </div>
    </div>
  );
}
