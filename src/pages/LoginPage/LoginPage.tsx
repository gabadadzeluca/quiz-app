import { useContext, useState } from "react";
import { Context } from "../../App";
import { useNavigate } from "react-router-dom";
import styles from './LoginPage.module.css';

import {
  categoryOptions,
  difficultyOptions,
  numberOptions,
} from "../../utils/options";
import LeaderboardPage from "../LeaderboardPage/LeaderboardPage";

export default function LoginPage() {
  const { username, number, setUsername, setCategoryId, setDifficulty, setNumber } =
    useContext(Context);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState<boolean>(false);
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
    if(!number) setNumber(5);
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
    <div className={styles.loginPageContainer}>
      <form className={styles.form}>
        <div>
          <div className={styles.selectDiv}>
            <label>Name:</label>
            <input
              type="text"
              placeholder="name"
              onChange={handleNameChange}
              value={username ?? ""}
            />
          </div>

          <div className={styles.selectDiv}>
            <label>Number of questions:</label>
            <select onChange={handleNumberChange}>
              {numberOptions.map((number) => (
                <option value={number} key={number}>
                  {number}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.selectDiv}>
            <label>Category:</label>
            <select onChange={handleCategoryChange}>
              {categoryOptions.map((obj) => (
                <option key={obj.id} value={obj.id}>
                  {obj.name}
                </option>
              ))}
            </select>
          </div>
          
          <div className={styles.selectDiv}>
            <label>Difficulty:</label>
            <select onChange={handleDifficultyChange}>
              {difficultyOptions.map((option, index) => (
                <option value={option} key={index}>{option}</option>
              ))}
            </select>
          </div>
        </div>
        <button onClick={handleSubmit} className={styles.startBtn}>Start</button>
      </form>

      <div className={styles.leaderboardDiv}>
        <button onClick={()=>setIsOpen(!isOpen)} className={styles.leaderboardBtn}>LEADERBOARD</button>
        {isOpen && (
          <LeaderboardPage />
        )}
      </div>
    </div>
  );
}
