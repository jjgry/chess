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
  let legalMoves = new Array(8).fill(new Array(8).fill(false));

  const copy2D = (array) => {
    let result = [];
    array.forEach((subArray) => {
      result.push(subArray.slice());
    });
    return result;
  };

  const setLegalMove = (legalMoves, i, j) => {
    let arrayCopy = copy2D(legalMoves);
    console.log(arrayCopy);
    let newRow = arrayCopy[i];
    newRow.splice(j, 1, true);
    arrayCopy.splice(i, 1, newRow);
    return arrayCopy;
  };

  if (piece === WHITE_BISHOP || piece === BLACK_BISHOP) {
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        console.log("i:" + i + " j:" + j);
        const xdiff = Math.abs(row - i);
        const ydiff = Math.abs(col - j);
        console.log(xdiff + " " + ydiff);
        if (xdiff === ydiff) {
          console.log("here");
          legalMoves = setLegalMove(legalMoves, i, j);
        }
      }
    }
  }
  console.log(legalMoves);

  return legalMoves;
};
