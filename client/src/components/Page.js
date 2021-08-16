import Game from "../contaniers/Game";
import styles from "./Page.module.css";

const Page = () => {
  return (
    <div className={styles.page}>
      <div className={styles.logo}>
        <p>♛chess</p>
      </div>
      <div className={styles.header}>
        <h1>JJ's Bad 90s Chess</h1>
      </div>
      <div className={styles.content}>
        <Game />
      </div>
      <div className={styles.contentleft}>
        <button href="./">Home</button>
        <button href="./about">About</button>
        <button href="./chess">Chess</button>
        <button href="./games">Other cool games</button>
      </div>
      <div className={styles.contentright}>
        <ul>
          <li>Check out this awesome game!</li>
          <li>
            <img href="./" alt="image.jpg" />
            <p>
              you won't <i>believe</i> this one trick to longer life!
            </p>
          </li>
          <li>
            Learn chess in only 20 minutes at{" "}
            <a href="https://example.com/you-suck-at-chess">
              example.com/you-suck-at-chess
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.footer}>© 2021 JJ Gray </div>
    </div>
  );
};

export default Page;
