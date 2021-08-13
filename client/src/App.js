import React, { useState } from "react";
import { Board } from "./components/Board";
import { Counter } from "./features/counter/counter";

export function App() {
  const initialPosition = [
    ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"],
    ["♟︎", "♟︎", "♟︎", "♟︎", "♟︎", "♟︎", "♟︎", "♟︎"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙"],
    ["♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"],
  ];

  const whitePieces = ["♙", "♖", "♘", "♗", "♕", "♔"];
  const blackPieces = ["♟︎", "♜", "♞", "♝", "♛", "♚"];

  const [tiles, setTiles] = useState(initialPosition);

  const [selected, setSelected] = useState(
    new Array(8).fill(new Array(8).fill(false))
  );

  const [selection, setSelection] = useState([-1, -1]);

  const [whiteIsNext, setWhiteIsNext] = useState(true);

  const copy2D = (array) => {
    let result = [];
    array.forEach((subArray) => {
      result.push(subArray.slice());
    });
    return result;
  };

  const set2D = (array, row, col, value) => {
    let arrayCopy = copy2D(array);
    let newRow = arrayCopy[row];
    newRow.splice(col, 1, value);
    arrayCopy.splice(row, 1, newRow);
    return arrayCopy;
  };

  const movePiece = (startRow, startCol, endRow, endCol) => {
    const piece = tiles[startRow][startCol];
    let newBoard = set2D(tiles, endRow, endCol, piece);
    newBoard = set2D(newBoard, startRow, startCol, "");
    setTiles(newBoard);
  };

  const handleClick = (row, col) => {
    const [startRow, startCol] = selection;
    const pieceAtClick = tiles[row][col];
    if (startRow === -1 && startCol === -1) {
      // Set selection
      const canSelect =
        pieceAtClick && whiteIsNext
          ? whitePieces.includes(pieceAtClick)
          : blackPieces.includes(pieceAtClick);
      if (canSelect) {
        const newSelected = set2D(selected, row, col, true);
        setSelected(newSelected);
        setSelection([row, col]);
      }
    } else if (startRow !== -1 && startCol !== -1) {
      const pieceAtSelection = tiles[startRow][startCol];
      if (startRow === row && startCol === col) {
        // Remove selection
        const newSelected = set2D(selected, row, col, false);
        setSelected(newSelected);
        setSelection([-1, -1]);
      } else if (pieceAtSelection !== "") {
        // Move piece
        movePiece(startRow, startCol, row, col);
        const newSelected = set2D(selected, startRow, startCol, false);
        setSelected(newSelected);
        setSelection([-1, -1]);
        setWhiteIsNext(!whiteIsNext);
      } else {
        console.log("here");
      }
    }
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board
          tiles={tiles}
          selected={selected}
          onClick={(row, col) => handleClick(row, col)}
        />
        <Counter />
      </div>
      <div className="game-info">
        <div>{whiteIsNext ? "White to move" : "Black to move"}</div>
      </div>
    </div>
  );
}
