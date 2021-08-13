import { useSelector, useDispatch } from "react-redux";

export function Tile(props) {
  const selected = useSelector(
    (state) => state.game.selected[props.row][props.col]
  );
  const dispatch = useDispatch();

  return (
    <button
      className={
        "tile" + (selected ? " selected" : "") + (props.dark ? " dark" : "")
      }
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}
