import { createSlice } from "@reduxjs/toolkit";
import { getLegalMoves, newLegalMovesArray } from "../utils/moves/legalMoves";

export const gameSlice = createSlice({
  name: "game",
  initialState: {
    tiles: [
      ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"],
      ["♟︎", "♟︎", "♟︎", "♟︎", "♟︎", "♟︎", "♟︎", "♟︎"],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", ""],
      ["♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙"],
      ["♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"],
    ],
    selected: new Array(8).fill(new Array(8).fill(false)),
    selection: [-1, -1],
    whiteIsNext: true,
    highlightedMoves: newLegalMovesArray(),
  },
  reducers: {
    clickUnselected: (state, action) => {
      const clickedRow = action.payload.row;
      const clickedCol = action.payload.col;
      const pieceAtClick = state.tiles[clickedRow][clickedCol];
      const [selectedRow, selectedCol] = state.selection;

      const canSelect =
        pieceAtClick && state.whiteIsNext
          ? whitePieces.includes(pieceAtClick)
          : blackPieces.includes(pieceAtClick);
      if (selectedRow === -1 && selectedCol === -1 && canSelect) {
        // Set selection
        const newSelected = set2D(state.selected, clickedRow, clickedCol, true);
        state.selected = newSelected;
        state.selection = [clickedRow, clickedCol];
        state.highlightedMoves = getLegalMoves(
          copy2D(state.tiles),
          clickedRow,
          clickedCol
        );
      } else if (selectedRow !== -1 && selectedCol !== -1) {
        const pieceAtSelection = state.tiles[selectedRow][selectedCol];
        if (pieceAtSelection !== "") {
          // Move piece
          let newBoard = set2D(
            state.tiles,
            clickedRow,
            clickedCol,
            pieceAtSelection
          );
          newBoard = set2D(newBoard, selectedRow, selectedCol, "");
          state.tiles = newBoard;

          const newSelected = set2D(
            state.selected,
            selectedRow,
            selectedCol,
            false
          );
          state.selected = newSelected;
          state.selection = [-1, -1];
          state.whiteIsNext = !state.whiteIsNext;
          state.highlightedMoves = newLegalMovesArray();
        } else {
          console.log("here");
        }
      }
    },
    clickSelected: (state, action) => {
      const clickedRow = action.payload.row;
      const clickedCol = action.payload.col;
      const [selectedRow, selectedCol] = state.selection;

      if (selectedRow === clickedRow && selectedCol === clickedCol) {
        // Remove selection
        const newSelected = set2D(
          state.selected,
          clickedRow,
          clickedCol,
          false
        );
        state.selected = newSelected;
        state.selection = [-1, -1];
        state.highlightedMoves = new Array(8).fill(new Array(8).fill(false));
      }
    },
  },
});

const whitePieces = ["♙", "♖", "♘", "♗", "♕", "♔"];
const blackPieces = ["♟︎", "♜", "♞", "♝", "♛", "♚"];

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

// Action creators are generated for each case reducer function
export const { clickUnselected, clickSelected } = gameSlice.actions;

export default gameSlice.reducer;

export const selectTile = (state, row, col) => state.game.tiles[row][col];

export const selectSelected = (state, row, col) =>
  state.game.selected[row][col];

export const selectWhiteIsNext = (state) => state.game.whiteIsNext;

export const selectHighlightedStatus = (state, row, col) =>
  state.game.highlightedMoves[row][col];
