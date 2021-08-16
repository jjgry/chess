import { setLegalMove, newLegalMovesArray } from "./legalMoves";

const getKingMoves = (tiles, row, col) => {
  let legalMoves = newLegalMovesArray();
  for (let i = Math.max(row - 1, 0); i <= Math.min(row + 1, 7); i++) {
    for (let j = Math.max(col - 1, 0); j <= Math.min(col + 1, 7); j++) {
      if (row === i && col === j) {
        continue;
      }
      legalMoves = setLegalMove(legalMoves, i, j);
    }
  }
  return legalMoves;
};

export default getKingMoves;