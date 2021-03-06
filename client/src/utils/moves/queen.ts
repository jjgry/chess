import {
  newLegalMovesArray,
  rankAndFileSearch,
  diagonalSearch,
} from "./legalMoves";

const getQueenMoves = (tiles: string[][], row: number, col: number) => {
  let legalMoves = newLegalMovesArray();
  legalMoves = rankAndFileSearch(legalMoves, tiles, row, col);
  legalMoves = diagonalSearch(legalMoves, tiles, row, col);
  return legalMoves;
};

export default getQueenMoves;
