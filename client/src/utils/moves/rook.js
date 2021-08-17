import { newLegalMovesArray, rankAndFileSearch } from "./legalMoves";

const getRookMoves = (tiles, row, col) => {
  let legalMoves = newLegalMovesArray();
  return rankAndFileSearch(legalMoves, tiles, row, col);
};

export default getRookMoves;
