import * as pieces from "../pieces";
import * as moves from "./pieces";
import { copy2D } from "../array2d";

export const getLegalMoves = (tiles, row, col) => {
  const piece = tiles[row][col];
  let legalMoves;

  switch (piece) {
    case pieces.WHITE_BISHOP:
    case pieces.BLACK_BISHOP:
      legalMoves = moves.getBishopMoves(tiles, row, col);
      break;
    case pieces.WHITE_ROOK:
    case pieces.BLACK_ROOK:
      legalMoves = moves.getRookMoves(tiles, row, col);
      break;
    case pieces.WHITE_QUEEN:
    case pieces.BLACK_QUEEN:
      legalMoves = moves.getQueenMoves(tiles, row, col);
      break;
    case pieces.WHITE_KING:
    case pieces.BLACK_KING:
      legalMoves = moves.getKingMoves(tiles, row, col);
      break;
    case pieces.WHITE_KNIGHT:
    case pieces.BLACK_KNIGHT:
      legalMoves = moves.getKnightMoves(tiles, row, col);
      break;
    case pieces.WHITE_PAWN:
    case pieces.BLACK_PAWN:
      legalMoves = moves.getPawnMoves(tiles, row, col);
      break;
    default:
      legalMoves = newLegalMovesArray();
      console.log("unsupported piece: " + piece);
  }
  return legalMoves;
};

export const isALegalMove = (legalMoves, row, col) => {
  return legalMoves[row][col];
};

export const setLegalMove = (legalMoves, i, j) => {
  let arrayCopy = copy2D(legalMoves);
  let newRow = arrayCopy[i];
  newRow.splice(j, 1, true);
  arrayCopy.splice(i, 1, newRow);
  return arrayCopy;
};

export const newLegalMovesArray = () => {
  return new Array(8).fill(new Array(8).fill(false));
};
