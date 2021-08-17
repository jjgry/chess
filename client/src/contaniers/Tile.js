import {
  selectTile,
  selectSelected,
  selectHighlightedStatus,
} from "../reducers/gameSlice";
import { clickSelected, clickUnselected } from "../actions";
import styles from "./Tile.module.css";
import { useAppDispatch, useAppSelector } from "../reducers/hooks";

const Tile = (props) => {
  const value = useAppSelector((state) =>
    selectTile(state, props.row, props.col)
  );
  const selected = useAppSelector((state) =>
    selectSelected(state, props.row, props.col)
  );
  const highlighted = useAppSelector((state) =>
    selectHighlightedStatus(state, props.row, props.col)
  );
  const dispatch = useAppDispatch();

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
