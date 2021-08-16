import { setLegalMove, newLegalMovesArray } from "./legalMoves";

const getKnightMoves = (tiles, row, col) => {
  let legalMoves = newLegalMovesArray();
  for (let i = Math.max(row - 2, 0); i <= Math.min(row + 2, 7); i++) {
    for (let j = Math.max(col - 2, 0); j <= Math.min(col + 2, 7); j++) {
      const rowDiff = Math.abs(row - i);
      const colDiff = Math.abs(col - j);
      if (
        (rowDiff === 2 && colDiff === 1) ||
        (rowDiff === 1 && colDiff === 2)
      ) {
        legalMoves = setLegalMove(legalMoves, i, j);
      }
    }
  }
  return legalMoves;
};

export default getKnightMoves;
