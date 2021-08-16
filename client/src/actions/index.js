import { CLICK_SELECTED, CLICK_UNSELECTED } from "../actiontypes";

export function clickSelected(row, col) {
  return {
    type: CLICK_SELECTED,
    payload: { row: row, col: col },
  };
}

export function clickUnselected(row, col) {
  return {
    type: CLICK_UNSELECTED,
    payload: { row: row, col: col },
  };
}
