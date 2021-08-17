import { newLegalMovesArray, diagonalSearch } from "./legalMoves";

const getBishopMoves = (tiles, row, col) => {
  let legalMoves = newLegalMovesArray();
  return diagonalSearch(legalMoves, tiles, row, col);
};

export default getBishopMoves;
