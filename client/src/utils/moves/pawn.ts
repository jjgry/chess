import * as pieces from "../pieces";
import { setLegalMove, newLegalMovesArray, canTake } from "./legalMoves";

const getPawnMoves = (tiles: string[][], row: number, col: number) => {
  let legalMoves = newLegalMovesArray();
  const piece = tiles[row][col];

  if (piece === pieces.WHITE_PAWN) {
    if (row === 6) {
      if (tiles[5][col] === "" && tiles[4][col] === "") {
        legalMoves = setLegalMove(legalMoves, 4, col);
      }
    }
    if (row !== 0) {
      if (tiles[row - 1][col] === "") {
        legalMoves = setLegalMove(legalMoves, row - 1, col);
      }
    }
    const couldMakeLeftDiagonalMove = row !== 0 && col !== 0;
    const couldMakeRightDiagonalMove = row !== 0 && col !== 7;
    if (couldMakeLeftDiagonalMove && canTake(piece, tiles[row - 1][col - 1])) {
      legalMoves = setLegalMove(legalMoves, row - 1, col - 1);
    }
    if (couldMakeRightDiagonalMove && canTake(piece, tiles[row - 1][col + 1])) {
      legalMoves = setLegalMove(legalMoves, row - 1, col + 1);
    }
  } else {
    if (row === 1) {
      if (tiles[2][col] === "" && tiles[3][col] === "") {
        legalMoves = setLegalMove(legalMoves, 3, col);
      }
    }
    if (row !== 7) {
      if (tiles[row + 1][col] === "") {
        legalMoves = setLegalMove(legalMoves, row + 1, col);
      }
    }
    const couldMakeLeftDiagonalMove = row !== 7 && col !== 0;
    const couldMakeRightDiagonalMove = row !== 7 && col !== 7;
    if (couldMakeLeftDiagonalMove && canTake(piece, tiles[row + 1][col - 1])) {
      legalMoves = setLegalMove(legalMoves, row + 1, col - 1);
    }
    if (couldMakeRightDiagonalMove && canTake(piece, tiles[row + 1][col + 1])) {
      legalMoves = setLegalMove(legalMoves, row + 1, col + 1);
    }
  }
  return legalMoves;
};

export default getPawnMoves;
