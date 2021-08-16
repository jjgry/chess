import * as pieces from "../pieces";
import { setLegalMove, newLegalMovesArray } from "./legalMoves";

const getPawnMoves = (tiles, row, col) => {
  let legalMoves = newLegalMovesArray();
  const piece = tiles[row][col];

  if (piece === pieces.WHITE_PAWN) {
    if (row === 6) {
      legalMoves = setLegalMove(legalMoves, 4, col);
    }
    if (row !== 0) {
      legalMoves = setLegalMove(legalMoves, row - 1, col);
    }
  } else {
    if (row === 1) {
      legalMoves = setLegalMove(legalMoves, 3, col);
    }
    if (row !== 7) {
      legalMoves = setLegalMove(legalMoves, row + 1, col);
    }
  }
  return legalMoves;
};

export default getPawnMoves;
