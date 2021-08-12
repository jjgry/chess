import { Tile } from "./Tile";

export function Board(props) {
  function renderTile(i) {
    return (
      <Tile
        value={props.tiles[i]}
        onClick={() => props.onClick(i)}
        selected={props.selected[i]}
        dark={Math.floor(i / 8) % 2 ? (i - 1) % 2 : i % 2}
      />
    );
  }

  return (
    <div>
      <div className="board-row">
        {renderTile(0)}
        {renderTile(1)}
        {renderTile(2)}
        {renderTile(3)}
        {renderTile(4)}
        {renderTile(5)}
        {renderTile(6)}
        {renderTile(7)}
      </div>
      <div className="board-row">
        {renderTile(8)}
        {renderTile(9)}
        {renderTile(10)}
        {renderTile(11)}
        {renderTile(12)}
        {renderTile(13)}
        {renderTile(14)}
        {renderTile(15)}
      </div>
      <div className="board-row">
        {renderTile(16)}
        {renderTile(17)}
        {renderTile(18)}
        {renderTile(19)}
        {renderTile(20)}
        {renderTile(21)}
        {renderTile(22)}
        {renderTile(23)}
      </div>
      <div className="board-row">
        {renderTile(24)}
        {renderTile(25)}
        {renderTile(26)}
        {renderTile(27)}
        {renderTile(28)}
        {renderTile(29)}
        {renderTile(30)}
        {renderTile(31)}
      </div>
      <div className="board-row">
        {renderTile(32)}
        {renderTile(33)}
        {renderTile(34)}
        {renderTile(35)}
        {renderTile(36)}
        {renderTile(37)}
        {renderTile(38)}
        {renderTile(39)}
      </div>
      <div className="board-row">
        {renderTile(40)}
        {renderTile(41)}
        {renderTile(42)}
        {renderTile(43)}
        {renderTile(44)}
        {renderTile(45)}
        {renderTile(46)}
        {renderTile(47)}
      </div>
      <div className="board-row">
        {renderTile(48)}
        {renderTile(49)}
        {renderTile(50)}
        {renderTile(51)}
        {renderTile(52)}
        {renderTile(53)}
        {renderTile(54)}
        {renderTile(55)}
      </div>
      <div className="board-row">
        {renderTile(56)}
        {renderTile(57)}
        {renderTile(58)}
        {renderTile(59)}
        {renderTile(60)}
        {renderTile(61)}
        {renderTile(62)}
        {renderTile(63)}
      </div>
    </div>
  );
}
