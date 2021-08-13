import React, { useState } from "react";
import { Board } from "./components/Board";

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

  const [tiles, setTiles] = useState(initialPosition);

  const [selected, setSelected] = useState(
    new Array(8).fill(new Array(8).fill(false))
  );

  const [selection, setSelection] = useState([-1, -1]);

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
    const pieceAtClick = tiles[row][col];
    if (selection[0] === -1 && selection[1] === -1 && pieceAtClick) {
      // Set selection
      const newSelected = set2D(selected, row, col, true);
      setSelected(newSelected);
      setSelection([row, col]);
      console.log("set selection");
    } else if (selection[0] !== -1 && selection[1] !== -1) {
      const pieceAtSelection = tiles[selection[0]][selection[1]];
      if (selection[0] === row && selection[1] === col) {
        // Remove selection
        const newSelected = set2D(selected, row, col, false);
        setSelected(newSelected);
        setSelection([-1, -1]);
        console.log("remove selection");
      } else if (tiles[selection[0]][selection[1]] !== "") {
        // Move piece
        movePiece(selection[0], selection[1], row, col);
        const newSelected = set2D(selected, selection[0], selection[1], false);
        setSelected(newSelected);
        setSelection([-1, -1]);
        console.log("move piece");
        console.log(newSelected);
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
      </div>
    </div>
  );
}
