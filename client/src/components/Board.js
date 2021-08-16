import Tile from "./Tile";

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
    let rowTiles;
    for (let row = 0; row < 8; row++) {
      rowTiles = [];
      for (let col = 0; col < 8; col++) {
        rowTiles.push(renderTile(row, col));
      }
      board[row] = (
        <div key={1000 * row} className="board-row">
          {rowTiles}
        </div>
      );
    }
    return board;
  };

  return <div className="board">{getBoardTiles()}</div>;
};

export default Board;
