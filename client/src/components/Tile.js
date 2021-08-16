import { useSelector, useDispatch } from "react-redux";
import { handleClick } from "../actions";

const Tile = (props) => {
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
      onClick={() => dispatch(handleClick(props.row, props.col))}
    >
      {value}
    </button>
  );
};

export default Tile;
