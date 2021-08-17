import { setLegalMove, newLegalMovesArray, canTake } from "./legalMoves";

const getKnightMoves = (tiles, row, col) => {
  let legalMoves = newLegalMovesArray();
  for (let i = Math.max(row - 2, 0); i <= Math.min(row + 2, 7); i++) {
    for (let j = Math.max(col - 2, 0); j <= Math.min(col + 2, 7); j++) {
      const rowDiff = Math.abs(row - i);
      const colDiff = Math.abs(col - j);
      const piece = tiles[row][col];
      const pieceAtNewPos = tiles[i][j];
      if (
        isTwoAndOne(rowDiff, colDiff) &&
        (canTake(piece, pieceAtNewPos) || pieceAtNewPos === "")
      ) {
        console.log(isTwoAndOne(rowDiff, colDiff));
        legalMoves = setLegalMove(legalMoves, i, j);
      }
    }
  }
  return legalMoves;
};

const isTwoAndOne = (rowDiff, colDiff) => {
  return (rowDiff === 2 && colDiff === 1) || (rowDiff === 1 && colDiff === 2);
};
export default getKnightMoves;
