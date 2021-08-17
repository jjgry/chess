import { newLegalMovesArray, diagonalSearch } from "./legalMoves";

const getBishopMoves = (tiles: string[][], row: number, col: number) => {
  let legalMoves = newLegalMovesArray();
  return diagonalSearch(legalMoves, tiles, row, col);
};

export default getBishopMoves;
