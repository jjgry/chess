import { setLegalMove, newLegalMovesArray } from "./legalMoves";

const getBishopMoves = (tiles, row, col) => {
  let legalMoves = newLegalMovesArray();
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

export default getBishopMoves;
