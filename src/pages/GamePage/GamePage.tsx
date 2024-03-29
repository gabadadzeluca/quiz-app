import { useContext, useEffect, useState } from "react";
import { Context } from "../../App";
import axios from "axios";
import { QuestionType } from "../../utils/QuestionType";
import QuestionComponent from "../../components/questionComponent/QuestionComponent";
import styles from "./GamePage.module.css";

export default function GamePage() {
  const { username, number, categoryId, difficulty } = useContext(Context);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [finishGame, setFinishGame] = useState<boolean>(false);
  const API_URL = `https://opentdb.com/api.php?amount=${number ?? 5}&category=${
    categoryId ?? 9
  }&difficulty=${difficulty ?? "easy"}&encode=base64`;
  const [questions, setQuestions] = useState<QuestionType[] | []>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchQuestions();
  }, []);
  const fetchQuestions = async () => {
    try {
      const response = await axios.get(API_URL);
      setQuestions(response.data?.results);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching questions:", error);
      setIsLoading(false);
    }
  };

  const handleQuestionChange = () => {
    if (currentQuestionIndex + 1 === questions.length) {
      handleGameEnd();
      return;
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handleGameEnd = () => {
    setFinishGame(true);
  };

  return (
    <div className={styles.gameContainer}>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {questions.length > 0 && (
            <>
              <QuestionComponent
                username={username || ""}
                question={questions[currentQuestionIndex]}
                handleQuestionChange={handleQuestionChange}
                currentQuestionIndex={currentQuestionIndex}
                finishGame={finishGame}
              />
              {finishGame ? null : (
                <button onClick={handleQuestionChange} className={styles.nextBtn}>NEXT</button>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}
