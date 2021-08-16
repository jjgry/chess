import Tile from "../contaniers/Tile";

const Board = () => {
  const renderTile = (row, col) => {
    return (
      <Tile
        key={8 * row + col}
        dark={row % 2 ? (col - 1) % 2 : col % 2}
        row={row}
        col={col}
      />
    );
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

  return <div className="board">{getBoardTiles()}</div>;
};

export default Board;
