import React, { useState } from "react";
import { Board } from "./components/Board";

export function App() {
  const [tiles, setTiles] = useState(new Array(...initialPosition));

  const [selected, setSelected] = useState(new Array(64).fill(false));

  function handleClick(i) {
    let newSelected = [...selected];
    newSelected.splice(i, 1, !newSelected[i]);
    setSelected(newSelected);
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board
          tiles={tiles}
          selected={selected}
          onClick={(i) => handleClick(i)}
        />
      </div>
    </div>
  );
}

const doubleArray = [
  ["r", "n", "b", "q", "k", "b", "n", "r"],
  ["p", "p", "p", "p", "p", "p", "p", "p"],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["P", "P", "P", "P", "P", "P", "P", "P"],
  ["R", "N", "B", "Q", "K", "B", "N", "R"],
];

const initialPosition = [
  "♜",
  "♞",
  "♝",
  "♛",
  "♚",
  "♝",
  "♞",
  "♜",
  "♟︎",
  "♟︎",
  "♟︎",
  "♟︎",
  "♟︎",
  "♟︎",
  "♟︎",
  "♟︎",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "♙",
  "♙",
  "♙",
  "♙",
  "♙",
  "♙",
  "♙",
  "♙",
  "♖",
  "♘",
  "♗",
  "♕",
  "♔",
  "♗",
  "♘",
  "♖",
];
