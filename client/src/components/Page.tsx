import Game from "../contaniers/Game";
import styles from "./Page.module.css";
import logo from "./chess.png";

const Page = () => (
  <div className={styles.page}>
    <div className={styles.logo}>
      <img className={styles.logoimg} src={logo} alt="chess logo" />
    </div>
    <div className={styles.header}>
      <h1>JJ's Bad 90s Chess</h1>
    </div>
    <div className={styles.content}>
      <p>
        Do you like <span className={styles.randomWhiteText}>chess</span>?
        You'll{" "}
        <i>
          <b>love</b>
        </i>{" "}
        the game you see below!{" "}
      </p>
      <p>
        Play bad 90s chess today on this web app made with{" "}
        <a href="https://create-react-app.dev/">create-react-app</a>
      </p>
      <Game />
    </div>
    <div className={styles.contentleft}>
      <button onClick={() => window.open("./", "_self")}>Home</button>
      <button onClick={() => window.open("./about", "_self")}>About</button>
      <button onClick={() => window.open("./chess", "_self")}>Chess</button>
      <button onClick={() => window.open("./games", "_self")}>
        Other cool games
      </button>
    </div>
    <div className={styles.contentright}>
      <h2>Welcome to my website!</h2>
      <ul>
        <li>Check out this awesome game!</li>
        <li>
          <img src="./" alt="advert.jpg" />
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

export default Page;
