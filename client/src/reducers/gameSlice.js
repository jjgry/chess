import { createSlice } from "@reduxjs/toolkit";

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
  },
  reducers: {
    handleClick: (state, action) => {
      const row = action.payload.row;
      const col = action.payload.col;
      const [startRow, startCol] = state.selection;
      const pieceAtClick = state.tiles[row][col];

      if (startRow === -1 && startCol === -1) {
        // Set selection
        const canSelect =
          pieceAtClick && state.whiteIsNext
            ? whitePieces.includes(pieceAtClick)
            : blackPieces.includes(pieceAtClick);
        if (canSelect) {
          const newSelected = set2D(state.selected, row, col, true);
          state.selected = newSelected; // conversion needed here
          state.selection = [row, col]; // conversion needed here
        }
      } else if (startRow !== -1 && startCol !== -1) {
        const pieceAtSelection = state.tiles[startRow][startCol];
        if (startRow === row && startCol === col) {
          // Remove selection
          const newSelected = set2D(state.selected, row, col, false);
          state.selected = newSelected; // conversion needed here
          state.selection = [-1, -1]; // conversion needed here
        } else if (pieceAtSelection !== "") {
          // Move piece
          let newBoard = set2D(state.tiles, row, col, pieceAtSelection);
          newBoard = set2D(newBoard, startRow, startCol, "");
          state.tiles = newBoard; // conversion needed here

          const newSelected = set2D(state.selected, startRow, startCol, false);
          state.selected = newSelected; // conversion needed here
          state.selection = [-1, -1]; // conversion needed here
          state.whiteIsNext = !state.whiteIsNext; // conversion needed here
        } else {
          console.log("here");
        }
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
export const { handleClick } = gameSlice.actions;

export default gameSlice.reducer;

export const selectTile = (state, row, col) => state.game.tiles[row][col];

export const selectSelected = (state, row, col) =>
  state.game.selected[row][col];

export const selectWhiteIsNext = (state) => state.game.whiteIsNext;
