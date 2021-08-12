export function Tile(props) {
  return (
    <button
      className={
        "tile" +
        (props.selected ? " selected" : "") +
        (props.dark ? " dark" : "")
      }
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}
