import { useSelector, useDispatch } from "react-redux";
import { handleClick } from "../reducers/gameSlice";

export function Tile(props) {
  const value = useSelector((state) => state.game.tiles[props.row][props.col]);
  const selected = useSelector(
    (state) => state.game.selected[props.row][props.col]
  );
  const dispatch = useDispatch();

  return (
    <button
      className={
        "tile" + (selected ? " selected" : "") + (props.dark ? " dark" : "")
      }
      onClick={() => dispatch(handleClick({ row: props.row, col: props.col }))}
    >
      {value}
    </button>
  );
}
