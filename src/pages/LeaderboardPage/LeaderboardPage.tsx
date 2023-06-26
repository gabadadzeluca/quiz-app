import { Link } from "react-router-dom";
import { ScoreObjectType } from "../../utils/ScoreObjectType";
import styles from "./LeaderBoardPage.module.css";

export default function LeaderboardPage() {
  const leaderboardObj = localStorage.getItem("leaderboard");
  const leaderboardArray: ScoreObjectType[] = leaderboardObj
    ? JSON.parse(leaderboardObj)
    : [];
  return (
    <div className={styles.leaderboardContainer}>
      <ul>
        {leaderboardArray.map((object, index) => (
          <li key={index}>
            {object.username} : {object.score}
          </li>
        ))}
      </ul>
      <button className={styles.button}>
        <Link to={"/#/"} className={styles.link}>
          Home
        </Link>
      </button>
    </div>
  );
}
