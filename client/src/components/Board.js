import { Tile } from "./Tile";

export function Board(props) {
  const renderTile = (row, col) => {
    return (
      <Tile
        value={props.tiles[row][col]}
        onClick={() => props.onClick(row, col)}
        selected={props.selected[row][col]}
        dark={row % 2 ? (col - 1) % 2 : col % 2}
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
      board[row] = <div className="board-row">{rowTiles}</div>;
    }
    return board;
  };

  return <div>{getBoardTiles()}</div>;
}
