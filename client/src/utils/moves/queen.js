import { setLegalMove, newLegalMovesArray } from "./legalMoves";

const getQueenMoves = (tiles, row, col) => {
  let legalMoves = newLegalMovesArray();
  // Ranks and files
  for (let i = 0; i < 8; i++) {
    if (i !== row) {
      legalMoves = setLegalMove(legalMoves, i, col);
    }
  }
  for (let j = 0; j < 8; j++) {
    if (j !== col) {
      legalMoves = setLegalMove(legalMoves, row, j);
    }
  }
  // Diagonals
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const rowDiff = Math.abs(row - i);
      const colDiff = Math.abs(col - j);
      if (rowDiff === colDiff && row !== i && col !== j) {
        legalMoves = setLegalMove(legalMoves, i, j);
      }
    }
  }
  return legalMoves;
};

export default getQueenMoves;
