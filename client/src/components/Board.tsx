import Tile from "../contaniers/Tile";
import styles from "./Board.module.css";

const Board = () => {
  const renderTile = (row: number, col: number) => {
    const isDark = !!(row % 2 ? (col - 1) % 2 : col % 2);
    return <Tile key={8 * row + col} dark={isDark} row={row} col={col} />;
  };

  const getBoardTiles = () => {
    let board = [];
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        board.push(renderTile(row, col));
      }
    }
    return board;
  };

  return <div className={styles.board}>{getBoardTiles()}</div>;
};

export default Board;
