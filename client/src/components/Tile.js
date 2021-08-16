import { useSelector, useDispatch } from "react-redux";
import { selectTile, selectSelected } from "../reducers/gameSlice";
import { handleClick } from "../actions";

const Tile = (props) => {
  const value = useSelector((state) => selectTile(state, props.row, props.col));
  const selected = useSelector((state) =>
    selectSelected(state, props.row, props.col)
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
