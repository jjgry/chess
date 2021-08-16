import { useSelector, useDispatch } from "react-redux";
import {
  selectTile,
  selectSelected,
  selectHighlightedStatus,
} from "../reducers/gameSlice";
import { clickSelected, clickUnselected } from "../actions";
import styles from "./Tile.module.css";

const Tile = (props) => {
  const value = useSelector((state) => selectTile(state, props.row, props.col));
  const selected = useSelector((state) =>
    selectSelected(state, props.row, props.col)
  );
  const highlighted = useSelector((state) =>
    selectHighlightedStatus(state, props.row, props.col)
  );
  const dispatch = useDispatch();

  const getTileClassName = () => {
    let className = [styles.tile];

    if (selected) {
      className.push(styles.selected);
    }
    if (highlighted) {
      className.push(styles.highlighted);
    }
    if (props.dark) {
      className.push(styles.dark);
    }
    return className.join(" ");
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
