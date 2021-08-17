import { newLegalMovesArray, rankAndFileSearch } from "./legalMoves";

const getRookMoves = (tiles: string[][], row: number, col: number) => {
  let legalMoves = newLegalMovesArray();
  return rankAndFileSearch(legalMoves, tiles, row, col);
};

export default getRookMoves;
