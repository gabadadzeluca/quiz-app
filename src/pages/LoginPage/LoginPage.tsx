import { useContext } from "react";
import { Context } from "../../App";
import { useNavigate } from "react-router-dom";
import {
  categoryOptions,
  difficultyOptions,
  numberOptions,
} from "../../utils/options";

export default function LoginPage() {
  const { username, setUsername, setCategoryId, setDifficulty, setNumber } =
    useContext(Context);
  const navigate = useNavigate();

  // create a leaderboard object
  const leaderboardObj = localStorage.getItem("leaderboard");
  if (!leaderboardObj || !Array.isArray(JSON.parse(leaderboardObj))) {
    localStorage.setItem("leaderboard", JSON.stringify([]));
  }

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let value = e.target.value;
    value = value.replace(/[^a-zA-Z\s]/g, "");
    setUsername(value);
  };

  const handleSubmit = (e: React.MouseEvent): void => {
    e.preventDefault();
    if (username === null || username === "") return;
    navigate("/game");
  };

  const handleNumberChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    let number = parseInt(e.target.value, 10);
    setNumber(number);
  };

  const handleCategoryChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    let value = parseInt(e.target.value, 10);
    setCategoryId(value);
  };

  const handleDifficultyChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    let difficulty = e.target.value;
    setDifficulty(difficulty);
  };

  return (
    <form>
      <div>
        <div>
          <label>Name:</label>
          <input
            type="text"
            placeholder="name:"
            onChange={handleNameChange}
            value={username ?? ""}
          />
        </div>

        <div>
          <label>Number of questions:</label>
          <select onChange={handleNumberChange}>
            {numberOptions.map((number) => (
              <option value={number} key={number}>
                {number}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Category:</label>
          <select onChange={handleCategoryChange}>
            {categoryOptions.map((obj) => (
              <option key={obj.id} value={obj.id}>
                {obj.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Difficulty:</label>
          <select onChange={handleDifficultyChange}>
            {difficultyOptions.map((option) => (
              <option value={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>

      <button onClick={handleSubmit}>Start</button>
    </form>
  );
}
