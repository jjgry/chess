import { selectWhiteIsNext } from "../reducers/gameSlice";
import Board from "../components/Board";
import styles from "./Game.module.css";
import { useAppSelector } from "../reducers/hooks";

const Game = () => {
  const whiteIsNext = useAppSelector(selectWhiteIsNext);

  const getStatusMessage = () => {
    return whiteIsNext ? "White to move" : "Black to move";
  };

  return (
    <div className="game">
      <Board />
      <div className={styles.gameInfo}>
        <div>{getStatusMessage()}</div>
      </div>
    </div>
  );
};

export default Game;
