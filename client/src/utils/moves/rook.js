import { setLegalMove, newLegalMovesArray } from "./legalMoves";

const getRookMoves = (tiles, row, col) => {
  let legalMoves = newLegalMovesArray();
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
  return legalMoves;
};

export default getRookMoves;
