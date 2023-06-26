import { QuestionType } from "../../utils/QuestionType";
import { useState } from "react";
import FinalScreenComponent from "../finalScreenComponent/FinalScreenComponent";
import { ScoreObjectType } from "../../utils/ScoreObjectType";

export default function QuestionComponent(props: {
  username: string;
  question: QuestionType;
  currentQuestionIndex: number;
  handleQuestionChange: (index: number) => void;
  finishGame: boolean;
}) {
  const [correctAnswers, setCorrectAnswers] = useState<number>(0);
  const { question, correct_answer, incorrect_answers } = props?.question;
  const { currentQuestionIndex, handleQuestionChange, finishGame, username } =
    props;
  const answers = [...incorrect_answers, correct_answer];
  const shuffledAnswers = answers.sort(() => Math.random() - 0.5);
  const handleAnswer = (selectedAnswer: string) => {
    if (selectedAnswer === correct_answer) {
      setCorrectAnswers(correctAnswers + 1);
    }
    handleQuestionChange(currentQuestionIndex + 1);
  };

  const updateLeaderboard = () => {
    const storedLeaderboardItem = localStorage.getItem("leaderboard");
    let leaderboardArray: ScoreObjectType[] | [] = storedLeaderboardItem
      ? JSON.parse(storedLeaderboardItem)
      : [];
    const newRecordObj: ScoreObjectType = {
      username: username,
      score: correctAnswers,
    };
    const existingRecordIndex = leaderboardArray.findIndex(
      (obj) => obj.username === username
    );

    if (existingRecordIndex !== -1) {
      // check if user already has a rating in the leaderboard
      if (leaderboardArray[existingRecordIndex].score >= correctAnswers) {
        // if the existing score is higher or equal to the current score, return without saving
        return;
      } else {
        leaderboardArray[existingRecordIndex] = newRecordObj;
      }
    } else {
      leaderboardArray = [...leaderboardArray, newRecordObj];
    }
    localStorage.setItem("leaderboard", JSON.stringify(leaderboardArray));
  };
  if (finishGame) updateLeaderboard();

  if (finishGame) {
    return (
      <FinalScreenComponent
        currentQuestionIndex={currentQuestionIndex}
        correctAnswers={correctAnswers}
      />
    );
  } else {
    return (
      <div>
        <p>{atob(question)}</p>
        <div>
          {shuffledAnswers.map((answer, index) => (
            <li onClick={() => handleAnswer(answer)} key={index}>
              {atob(answer)}
            </li>
          ))}
        </div>
      </div>
    );
  }
}
