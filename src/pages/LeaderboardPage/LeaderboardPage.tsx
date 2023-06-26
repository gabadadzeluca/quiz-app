import { ScoreObjectType } from "../../utils/ScoreObjectType";

export default function LeaderboardPage() {
  const leaderboardObj = localStorage.getItem("leaderboard");
  const leaderboardArray: ScoreObjectType[] = leaderboardObj
    ? JSON.parse(leaderboardObj)
    : [];
  return (
    <div>
      <ul>
        {leaderboardArray.map((object, index) => (
          <li key={index}>
            {object.username}:{object.score}
          </li>
        ))}
      </ul>
    </div>
  );
}
