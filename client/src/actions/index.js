import { HANDLE_CLICK } from "../actiontypes";

export function handleClick(row, col) {
  return {
    type: HANDLE_CLICK,
    payload: { row: row, col: col },
  };
}
