import { useSelector, useDispatch } from "react-redux";
import { selectTile, selectSelected } from "../reducers/gameSlice";
import { clickSelected, clickUnselected } from "../actions";

const Tile = (props) => {
  const value = useSelector((state) => selectTile(state, props.row, props.col));
  const selected = useSelector((state) =>
    selectSelected(state, props.row, props.col)
  );
  const dispatch = useDispatch();

  const getTileClassName = () => {
    return "tile" + (selected ? " selected" : "") + (props.dark ? " dark" : "");
  };

  const getOnClickAction = () => {
    if (selected) {
      return () => dispatch(clickSelected(props.row, props.col));
    } else {
      return () => dispatch(clickUnselected(props.row, props.col));
    }
  };

  return (
    <button className={getTileClassName()} onClick={getOnClickAction()}>
      {value}
    </button>
  );
};

export default Tile;
