export const WHITE_PAWN = "♙";
export const WHITE_KNIGHT = "♘";
export const WHITE_BISHOP = "♗";
export const WHITE_ROOK = "♖";
export const WHITE_QUEEN = "♕";
export const WHITE_KING = "♔";

export const BLACK_PAWN = "♟︎";
export const BLACK_KNIGHT = "♞";
export const BLACK_BISHOP = "♝";
export const BLACK_ROOK = "♜";
export const BLACK_QUEEN = "♛";
export const BLACK_KING = "♚";

const WHITE_PIECES = ["♙", "♖", "♘", "♗", "♕", "♔"];
const BLACK_PIECES = ["♟︎", "♜", "♞", "♝", "♛", "♚"];

export const isWhitePiece = (piece: string) => WHITE_PIECES.includes(piece);
export const isBlackPiece = (piece: string) => BLACK_PIECES.includes(piece);
