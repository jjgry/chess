import * as pieces from "../pieces";
import * as moves from "./pieces";
import { copy2D } from "../array2d";
import { isWhitePiece } from "../pieces";

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

export const canTake = (taker, takee) => {
  if (taker === "" || takee === "") {
    return false;
  }
  return isWhitePiece(taker) !== isWhitePiece(takee);
};

export const rankAndFileSearch = (legalMoves, tiles, row, col) => {
  const piece = tiles[row][col];
  // South search
  if (row < 8) {
    for (let i = row + 1; i < 8; i++) {
      const pieceAtNewPos = tiles[i][col];
      if (pieceAtNewPos === "") {
        legalMoves = setLegalMove(legalMoves, i, col);
      } else if (canTake(piece, pieceAtNewPos)) {
        legalMoves = setLegalMove(legalMoves, i, col);
        break;
      } else {
        break;
      }
    }
  }
  // North search
  if (row > 0) {
    for (let i = row - 1; i >= 0; i--) {
      const pieceAtNewPos = tiles[i][col];
      if (pieceAtNewPos === "") {
        legalMoves = setLegalMove(legalMoves, i, col);
      } else if (canTake(piece, pieceAtNewPos)) {
        legalMoves = setLegalMove(legalMoves, i, col);
        break;
      } else {
        break;
      }
    }
  }
  // East search
  if (col < 8) {
    for (let j = col + 1; j < 8; j++) {
      const pieceAtNewPos = tiles[row][j];
      if (pieceAtNewPos === "") {
        legalMoves = setLegalMove(legalMoves, row, j);
      } else if (canTake(piece, pieceAtNewPos)) {
        legalMoves = setLegalMove(legalMoves, row, j);
        break;
      } else {
        break;
      }
    }
  }
  // West search
  if (col > 0) {
    for (let j = col - 1; j >= 0; j--) {
      const pieceAtNewPos = tiles[row][j];
      if (pieceAtNewPos === "") {
        legalMoves = setLegalMove(legalMoves, row, j);
      } else if (canTake(piece, pieceAtNewPos)) {
        legalMoves = setLegalMove(legalMoves, row, j);
        break;
      } else {
        break;
      }
    }
  }
  return legalMoves;
};

export const diagonalSearch = (legalMoves, tiles, row, col) => {
  const piece = tiles[row][col];

  // South-east search
  if (row < 8 && col < 8) {
    const maxSearchDistance = Math.min(7 - row, 7 - col);
    for (
      let searchDistance = 1;
      searchDistance <= maxSearchDistance;
      searchDistance++
    ) {
      const newRow = row + searchDistance;
      const newCol = col + searchDistance;
      const pieceAtNewPos = tiles[newRow][newCol];
      if (pieceAtNewPos === "") {
        legalMoves = setLegalMove(legalMoves, newRow, newCol);
      } else if (canTake(piece, pieceAtNewPos)) {
        legalMoves = setLegalMove(legalMoves, newRow, newCol);
        break;
      } else {
        break;
      }
    }
  }
  // North-west search
  if (row > 0 && col > 0) {
    const maxSearchDistance = Math.min(row, col);
    for (
      let searchDistance = 1;
      searchDistance <= maxSearchDistance;
      searchDistance++
    ) {
      const newRow = row - searchDistance;
      const newCol = col - searchDistance;
      const pieceAtNewPos = tiles[newRow][newCol];
      if (pieceAtNewPos === "") {
        legalMoves = setLegalMove(legalMoves, newRow, newCol);
      } else if (canTake(piece, pieceAtNewPos)) {
        legalMoves = setLegalMove(legalMoves, newRow, newCol);
        break;
      } else {
        break;
      }
    }
  }
  // South-west search
  if (row < 8 && col > 0) {
    const maxSearchDistance = Math.min(7 - row, col);
    for (
      let searchDistance = 1;
      searchDistance <= maxSearchDistance;
      searchDistance++
    ) {
      const newRow = row + searchDistance;
      const newCol = col - searchDistance;
      const pieceAtNewPos = tiles[newRow][newCol];
      if (pieceAtNewPos === "") {
        legalMoves = setLegalMove(legalMoves, newRow, newCol);
      } else if (canTake(piece, pieceAtNewPos)) {
        legalMoves = setLegalMove(legalMoves, newRow, newCol);
        break;
      } else {
        break;
      }
    }
  }
  // North-east search
  if (row > 0 && col < 8) {
    const maxSearchDistance = Math.min(row, 7 - col);
    for (
      let searchDistance = 1;
      searchDistance <= maxSearchDistance;
      searchDistance++
    ) {
      const newRow = row - searchDistance;
      const newCol = col + searchDistance;
      const pieceAtNewPos = tiles[newRow][newCol];
      if (pieceAtNewPos === "") {
        legalMoves = setLegalMove(legalMoves, newRow, newCol);
      } else if (canTake(piece, pieceAtNewPos)) {
        legalMoves = setLegalMove(legalMoves, newRow, newCol);
        break;
      } else {
        break;
      }
    }
  }
  return legalMoves;
};
