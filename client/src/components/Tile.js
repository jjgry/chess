import { useSelector, useDispatch } from "react-redux";
import { selectTile, selectSelected } from "../reducers/gameSlice";
import { clickSelected, clickUnselected } from "../actions";

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
      onClick={() => {
        if (selected) {
          dispatch(clickSelected(props.row, props.col));
        } else {
          dispatch(clickUnselected(props.row, props.col));
        }
      }}
    >
      {value}
    </button>
  );
};

export default Tile;
