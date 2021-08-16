const WHITE_PAWN = "♙";
const WHITE_KNIGHT = "♘";
const WHITE_BISHOP = "♗";
const WHITE_ROOK = "♖";
const WHITE_QUEEN = "♕";
const WHITE_KING = "♔";

const BLACK_PAWN = "♟︎";
const BLACK_KNIGHT = "♞";
const BLACK_BISHOP = "♝";
const BLACK_ROOK = "♜";
const BLACK_QUEEN = "♛";
const BLACK_KING = "♚";

export const getLegalMoves = (tiles, row, col) => {
  const piece = tiles[row][col];
  let legalMoves;

  switch (piece) {
    case WHITE_BISHOP:
    case BLACK_BISHOP:
      legalMoves = getBishopMoves(tiles, row, col);
      break;
    case WHITE_ROOK:
    case BLACK_ROOK:
      legalMoves = getRookMoves(tiles, row, col);
      break;
    case WHITE_QUEEN:
    case BLACK_QUEEN:
      legalMoves = getQueenMoves(tiles, row, col);
      break;
    case WHITE_KING:
    case BLACK_KING:
      legalMoves = getKingMoves(tiles, row, col);
      break;
    case WHITE_KNIGHT:
    case BLACK_KNIGHT:
      legalMoves = getKnightMoves(tiles, row, col);
      break;
    case WHITE_PAWN:
    case BLACK_PAWN:
      legalMoves = getPawnMoves(tiles, row, col);
      break;
    default:
      legalMoves = newLegalMovesArray();
      console.log("unsupported piece: " + piece);
  }

  return legalMoves;
};

const copy2D = (array) => {
  let result = [];
  array.forEach((subArray) => {
    result.push(subArray.slice());
  });
  return result;
};

const setLegalMove = (legalMoves, i, j) => {
  let arrayCopy = copy2D(legalMoves);
  let newRow = arrayCopy[i];
  newRow.splice(j, 1, true);
  arrayCopy.splice(i, 1, newRow);
  return arrayCopy;
};

export const newLegalMovesArray = () => {
  return new Array(8).fill(new Array(8).fill(false));
};

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

const getRookMoves = (tiles, row, col) => {
  let legalMoves = newLegalMovesArray();
  for (let i = 0; i < 8; i++) {
    if (i !== row) {
      legalMoves = setLegalMove(legalMoves, i, col);
    }
  }
  for (let j = 0; j < 8; j++) {
    if (j !== col) {
      legalMoves = setLegalMove(legalMoves, row, j);
    }
  }
  return legalMoves;
};

const getQueenMoves = (tiles, row, col) => {
  let legalMoves = newLegalMovesArray();
  // Ranks and files
  for (let i = 0; i < 8; i++) {
    if (i !== row) {
      legalMoves = setLegalMove(legalMoves, i, col);
    }
  }
  for (let j = 0; j < 8; j++) {
    if (j !== col) {
      legalMoves = setLegalMove(legalMoves, row, j);
    }
  }
  // Diagonals
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

const getKingMoves = (tiles, row, col) => {
  let legalMoves = newLegalMovesArray();
  for (let i = Math.max(row - 1, 0); i <= Math.min(row + 1, 7); i++) {
    for (let j = Math.max(col - 1, 0); j <= Math.min(col + 1, 7); j++) {
      if (row === i && col === j) {
        continue;
      }
      legalMoves = setLegalMove(legalMoves, i, j);
    }
  }
  return legalMoves;
};

const getKnightMoves = (tiles, row, col) => {
  let legalMoves = newLegalMovesArray();
  for (let i = Math.max(row - 2, 0); i <= Math.min(row + 2, 7); i++) {
    for (let j = Math.max(col - 2, 0); j <= Math.min(col + 2, 7); j++) {
      const rowDiff = Math.abs(row - i);
      const colDiff = Math.abs(col - j);
      if (
        (rowDiff === 2 && colDiff === 1) ||
        (rowDiff === 1 && colDiff === 2)
      ) {
        legalMoves = setLegalMove(legalMoves, i, j);
      }
    }
  }
  return legalMoves;
};

const getPawnMoves = (tiles, row, col) => {
  let legalMoves = newLegalMovesArray();
  const piece = tiles[row][col];

  if (piece === WHITE_PAWN) {
    if (row === 6) {
      legalMoves = setLegalMove(legalMoves, 4, col);
    }
    if (row !== 0) {
      legalMoves = setLegalMove(legalMoves, row - 1, col);
    }
  } else {
    if (row === 1) {
      legalMoves = setLegalMove(legalMoves, 3, col);
    }
    if (row !== 7) {
      legalMoves = setLegalMove(legalMoves, row + 1, col);
    }
  }
  return legalMoves;
};
